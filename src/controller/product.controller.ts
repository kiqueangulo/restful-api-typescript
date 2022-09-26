import { Request, Response } from "express";

import {
  CreateProductInput,
  UpdateProductInput,
} from "../schema/product.schema";
import { createProduct } from "../service/product.service";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;
  const product = await createProduct({ ...body, user: userId });

  return res.send(product);
}

export async function updateProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {}

export async function getProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {}

export async function deleteProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {}
