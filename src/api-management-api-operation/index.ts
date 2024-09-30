// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}
  */
  readonly operationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}
  */
  readonly urlTemplate: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#request ApiManagementApiOperation#request}
  */
  readonly request?: ApiManagementApiOperationRequest;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#response ApiManagementApiOperation#response}
  */
  readonly response?: ApiManagementApiOperationResponse[] | cdktf.IResolvable;
  /**
  * template_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#template_parameter ApiManagementApiOperation#template_parameter}
  */
  readonly templateParameter?: ApiManagementApiOperationTemplateParameter[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#timeouts ApiManagementApiOperation#timeouts}
  */
  readonly timeouts?: ApiManagementApiOperationTimeouts;
}
export interface ApiManagementApiOperationRequestHeaderExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationRequestHeaderExampleToTerraform(struct?: ApiManagementApiOperationRequestHeaderExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationRequestHeaderExampleToHclTerraform(struct?: ApiManagementApiOperationRequestHeaderExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestHeaderExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestHeaderExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestHeaderExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationRequestHeaderExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestHeaderExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestHeaderExampleOutputReference {
    return new ApiManagementApiOperationRequestHeaderExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationRequestHeaderExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationRequestHeaderToTerraform(struct?: ApiManagementApiOperationRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationRequestHeaderExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationRequestHeaderToHclTerraform(struct?: ApiManagementApiOperationRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestHeaderExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestHeaderExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationRequestHeaderExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationRequestHeaderExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestHeaderOutputReference {
    return new ApiManagementApiOperationRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestQueryParameterExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationRequestQueryParameterExampleToTerraform(struct?: ApiManagementApiOperationRequestQueryParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationRequestQueryParameterExampleToHclTerraform(struct?: ApiManagementApiOperationRequestQueryParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestQueryParameterExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestQueryParameterExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestQueryParameterExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationRequestQueryParameterExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestQueryParameterExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestQueryParameterExampleOutputReference {
    return new ApiManagementApiOperationRequestQueryParameterExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestQueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationRequestQueryParameterExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationRequestQueryParameterToTerraform(struct?: ApiManagementApiOperationRequestQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationRequestQueryParameterExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationRequestQueryParameterToHclTerraform(struct?: ApiManagementApiOperationRequestQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestQueryParameterExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestQueryParameterExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationRequestQueryParameterExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationRequestQueryParameterExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationRequestQueryParameterList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestQueryParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestQueryParameterOutputReference {
    return new ApiManagementApiOperationRequestQueryParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestRepresentationExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationRequestRepresentationExampleToTerraform(struct?: ApiManagementApiOperationRequestRepresentationExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationRequestRepresentationExampleToHclTerraform(struct?: ApiManagementApiOperationRequestRepresentationExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestRepresentationExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestRepresentationExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestRepresentationExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationRequestRepresentationExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestRepresentationExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestRepresentationExampleOutputReference {
    return new ApiManagementApiOperationRequestRepresentationExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestRepresentationFormParameterExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationRequestRepresentationFormParameterExampleToTerraform(struct?: ApiManagementApiOperationRequestRepresentationFormParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationRequestRepresentationFormParameterExampleToHclTerraform(struct?: ApiManagementApiOperationRequestRepresentationFormParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestRepresentationFormParameterExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestRepresentationFormParameterExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationRequestRepresentationFormParameterExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestRepresentationFormParameterExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference {
    return new ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestRepresentationFormParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationRequestRepresentationFormParameterExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationRequestRepresentationFormParameterToTerraform(struct?: ApiManagementApiOperationRequestRepresentationFormParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationRequestRepresentationFormParameterExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationRequestRepresentationFormParameterToHclTerraform(struct?: ApiManagementApiOperationRequestRepresentationFormParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestRepresentationFormParameterExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestRepresentationFormParameterExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestRepresentationFormParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestRepresentationFormParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestRepresentationFormParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationRequestRepresentationFormParameterExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationRequestRepresentationFormParameterExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationRequestRepresentationFormParameterList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestRepresentationFormParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestRepresentationFormParameterOutputReference {
    return new ApiManagementApiOperationRequestRepresentationFormParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequestRepresentation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationRequestRepresentationExample[] | cdktf.IResolvable;
  /**
  * form_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}
  */
  readonly formParameter?: ApiManagementApiOperationRequestRepresentationFormParameter[] | cdktf.IResolvable;
}

export function apiManagementApiOperationRequestRepresentationToTerraform(struct?: ApiManagementApiOperationRequestRepresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    example: cdktf.listMapper(apiManagementApiOperationRequestRepresentationExampleToTerraform, true)(struct!.example),
    form_parameter: cdktf.listMapper(apiManagementApiOperationRequestRepresentationFormParameterToTerraform, true)(struct!.formParameter),
  }
}


export function apiManagementApiOperationRequestRepresentationToHclTerraform(struct?: ApiManagementApiOperationRequestRepresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestRepresentationExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestRepresentationExampleList",
    },
    form_parameter: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestRepresentationFormParameterToHclTerraform, true)(struct!.formParameter),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestRepresentationFormParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestRepresentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationRequestRepresentation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    if (this._formParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formParameter = this._formParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequestRepresentation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._schemaId = undefined;
      this._typeName = undefined;
      this._example.internalValue = undefined;
      this._formParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._schemaId = value.schemaId;
      this._typeName = value.typeName;
      this._example.internalValue = value.example;
      this._formParameter.internalValue = value.formParameter;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationRequestRepresentationExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationRequestRepresentationExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }

  // form_parameter - computed: false, optional: true, required: false
  private _formParameter = new ApiManagementApiOperationRequestRepresentationFormParameterList(this, "form_parameter", false);
  public get formParameter() {
    return this._formParameter;
  }
  public putFormParameter(value: ApiManagementApiOperationRequestRepresentationFormParameter[] | cdktf.IResolvable) {
    this._formParameter.internalValue = value;
  }
  public resetFormParameter() {
    this._formParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formParameterInput() {
    return this._formParameter.internalValue;
  }
}

export class ApiManagementApiOperationRequestRepresentationList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationRequestRepresentation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationRequestRepresentationOutputReference {
    return new ApiManagementApiOperationRequestRepresentationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}
  */
  readonly header?: ApiManagementApiOperationRequestHeader[] | cdktf.IResolvable;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#query_parameter ApiManagementApiOperation#query_parameter}
  */
  readonly queryParameter?: ApiManagementApiOperationRequestQueryParameter[] | cdktf.IResolvable;
  /**
  * representation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}
  */
  readonly representation?: ApiManagementApiOperationRequestRepresentation[] | cdktf.IResolvable;
}

export function apiManagementApiOperationRequestToTerraform(struct?: ApiManagementApiOperationRequestOutputReference | ApiManagementApiOperationRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    header: cdktf.listMapper(apiManagementApiOperationRequestHeaderToTerraform, true)(struct!.header),
    query_parameter: cdktf.listMapper(apiManagementApiOperationRequestQueryParameterToTerraform, true)(struct!.queryParameter),
    representation: cdktf.listMapper(apiManagementApiOperationRequestRepresentationToTerraform, true)(struct!.representation),
  }
}


export function apiManagementApiOperationRequestToHclTerraform(struct?: ApiManagementApiOperationRequestOutputReference | ApiManagementApiOperationRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestHeaderList",
    },
    query_parameter: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestQueryParameterToHclTerraform, true)(struct!.queryParameter),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestQueryParameterList",
    },
    representation: {
      value: cdktf.listMapperHcl(apiManagementApiOperationRequestRepresentationToHclTerraform, true)(struct!.representation),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationRequestRepresentationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiManagementApiOperationRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    if (this._representation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.representation = this._representation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._header.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
      this._representation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._header.internalValue = value.header;
      this._queryParameter.internalValue = value.queryParameter;
      this._representation.internalValue = value.representation;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ApiManagementApiOperationRequestHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ApiManagementApiOperationRequestHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new ApiManagementApiOperationRequestQueryParameterList(this, "query_parameter", false);
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: ApiManagementApiOperationRequestQueryParameter[] | cdktf.IResolvable) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }

  // representation - computed: false, optional: true, required: false
  private _representation = new ApiManagementApiOperationRequestRepresentationList(this, "representation", false);
  public get representation() {
    return this._representation;
  }
  public putRepresentation(value: ApiManagementApiOperationRequestRepresentation[] | cdktf.IResolvable) {
    this._representation.internalValue = value;
  }
  public resetRepresentation() {
    this._representation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get representationInput() {
    return this._representation.internalValue;
  }
}
export interface ApiManagementApiOperationResponseHeaderExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationResponseHeaderExampleToTerraform(struct?: ApiManagementApiOperationResponseHeaderExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationResponseHeaderExampleToHclTerraform(struct?: ApiManagementApiOperationResponseHeaderExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseHeaderExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseHeaderExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseHeaderExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationResponseHeaderExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseHeaderExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseHeaderExampleOutputReference {
    return new ApiManagementApiOperationResponseHeaderExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationResponseHeaderExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationResponseHeaderToTerraform(struct?: ApiManagementApiOperationResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationResponseHeaderExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationResponseHeaderToHclTerraform(struct?: ApiManagementApiOperationResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseHeaderExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseHeaderExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationResponseHeaderExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationResponseHeaderExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseHeaderOutputReference {
    return new ApiManagementApiOperationResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponseRepresentationExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationResponseRepresentationExampleToTerraform(struct?: ApiManagementApiOperationResponseRepresentationExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationResponseRepresentationExampleToHclTerraform(struct?: ApiManagementApiOperationResponseRepresentationExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseRepresentationExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseRepresentationExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseRepresentationExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationResponseRepresentationExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseRepresentationExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseRepresentationExampleOutputReference {
    return new ApiManagementApiOperationResponseRepresentationExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponseRepresentationFormParameterExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationResponseRepresentationFormParameterExampleToTerraform(struct?: ApiManagementApiOperationResponseRepresentationFormParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationResponseRepresentationFormParameterExampleToHclTerraform(struct?: ApiManagementApiOperationResponseRepresentationFormParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseRepresentationFormParameterExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseRepresentationFormParameterExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationResponseRepresentationFormParameterExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseRepresentationFormParameterExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference {
    return new ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponseRepresentationFormParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationResponseRepresentationFormParameterExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationResponseRepresentationFormParameterToTerraform(struct?: ApiManagementApiOperationResponseRepresentationFormParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationResponseRepresentationFormParameterExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationResponseRepresentationFormParameterToHclTerraform(struct?: ApiManagementApiOperationResponseRepresentationFormParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseRepresentationFormParameterExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseRepresentationFormParameterExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseRepresentationFormParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseRepresentationFormParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseRepresentationFormParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationResponseRepresentationFormParameterExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationResponseRepresentationFormParameterExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationResponseRepresentationFormParameterList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseRepresentationFormParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseRepresentationFormParameterOutputReference {
    return new ApiManagementApiOperationResponseRepresentationFormParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponseRepresentation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationResponseRepresentationExample[] | cdktf.IResolvable;
  /**
  * form_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}
  */
  readonly formParameter?: ApiManagementApiOperationResponseRepresentationFormParameter[] | cdktf.IResolvable;
}

export function apiManagementApiOperationResponseRepresentationToTerraform(struct?: ApiManagementApiOperationResponseRepresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    example: cdktf.listMapper(apiManagementApiOperationResponseRepresentationExampleToTerraform, true)(struct!.example),
    form_parameter: cdktf.listMapper(apiManagementApiOperationResponseRepresentationFormParameterToTerraform, true)(struct!.formParameter),
  }
}


export function apiManagementApiOperationResponseRepresentationToHclTerraform(struct?: ApiManagementApiOperationResponseRepresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseRepresentationExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseRepresentationExampleList",
    },
    form_parameter: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseRepresentationFormParameterToHclTerraform, true)(struct!.formParameter),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseRepresentationFormParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseRepresentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponseRepresentation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    if (this._formParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formParameter = this._formParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponseRepresentation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._schemaId = undefined;
      this._typeName = undefined;
      this._example.internalValue = undefined;
      this._formParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._schemaId = value.schemaId;
      this._typeName = value.typeName;
      this._example.internalValue = value.example;
      this._formParameter.internalValue = value.formParameter;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationResponseRepresentationExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationResponseRepresentationExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }

  // form_parameter - computed: false, optional: true, required: false
  private _formParameter = new ApiManagementApiOperationResponseRepresentationFormParameterList(this, "form_parameter", false);
  public get formParameter() {
    return this._formParameter;
  }
  public putFormParameter(value: ApiManagementApiOperationResponseRepresentationFormParameter[] | cdktf.IResolvable) {
    this._formParameter.internalValue = value;
  }
  public resetFormParameter() {
    this._formParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formParameterInput() {
    return this._formParameter.internalValue;
  }
}

export class ApiManagementApiOperationResponseRepresentationList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponseRepresentation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseRepresentationOutputReference {
    return new ApiManagementApiOperationResponseRepresentationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}
  */
  readonly statusCode: number;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}
  */
  readonly header?: ApiManagementApiOperationResponseHeader[] | cdktf.IResolvable;
  /**
  * representation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}
  */
  readonly representation?: ApiManagementApiOperationResponseRepresentation[] | cdktf.IResolvable;
}

export function apiManagementApiOperationResponseToTerraform(struct?: ApiManagementApiOperationResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    header: cdktf.listMapper(apiManagementApiOperationResponseHeaderToTerraform, true)(struct!.header),
    representation: cdktf.listMapper(apiManagementApiOperationResponseRepresentationToTerraform, true)(struct!.representation),
  }
}


export function apiManagementApiOperationResponseToHclTerraform(struct?: ApiManagementApiOperationResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseHeaderList",
    },
    representation: {
      value: cdktf.listMapperHcl(apiManagementApiOperationResponseRepresentationToHclTerraform, true)(struct!.representation),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationResponseRepresentationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._representation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.representation = this._representation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._statusCode = undefined;
      this._header.internalValue = undefined;
      this._representation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._statusCode = value.statusCode;
      this._header.internalValue = value.header;
      this._representation.internalValue = value.representation;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ApiManagementApiOperationResponseHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ApiManagementApiOperationResponseHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // representation - computed: false, optional: true, required: false
  private _representation = new ApiManagementApiOperationResponseRepresentationList(this, "representation", false);
  public get representation() {
    return this._representation;
  }
  public putRepresentation(value: ApiManagementApiOperationResponseRepresentation[] | cdktf.IResolvable) {
    this._representation.internalValue = value;
  }
  public resetRepresentation() {
    this._representation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get representationInput() {
    return this._representation.internalValue;
  }
}

export class ApiManagementApiOperationResponseList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationResponse[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationResponseOutputReference {
    return new ApiManagementApiOperationResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationTemplateParameterExample {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}
  */
  readonly externalValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}
  */
  readonly value?: string;
}

export function apiManagementApiOperationTemplateParameterExampleToTerraform(struct?: ApiManagementApiOperationTemplateParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    name: cdktf.stringToTerraform(struct!.name),
    summary: cdktf.stringToTerraform(struct!.summary),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiManagementApiOperationTemplateParameterExampleToHclTerraform(struct?: ApiManagementApiOperationTemplateParameterExample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationTemplateParameterExampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationTemplateParameterExample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationTemplateParameterExample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._name = undefined;
      this._summary = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._name = value.name;
      this._summary = value.summary;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiManagementApiOperationTemplateParameterExampleList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationTemplateParameterExample[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationTemplateParameterExampleOutputReference {
    return new ApiManagementApiOperationTemplateParameterExampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationTemplateParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}
  */
  readonly schemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}
  */
  readonly values?: string[];
  /**
  * example block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}
  */
  readonly example?: ApiManagementApiOperationTemplateParameterExample[] | cdktf.IResolvable;
}

export function apiManagementApiOperationTemplateParameterToTerraform(struct?: ApiManagementApiOperationTemplateParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema_id: cdktf.stringToTerraform(struct!.schemaId),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    example: cdktf.listMapper(apiManagementApiOperationTemplateParameterExampleToTerraform, true)(struct!.example),
  }
}


export function apiManagementApiOperationTemplateParameterToHclTerraform(struct?: ApiManagementApiOperationTemplateParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_id: {
      value: cdktf.stringToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.listMapperHcl(apiManagementApiOperationTemplateParameterExampleToHclTerraform, true)(struct!.example),
      isBlock: true,
      type: "list",
      storageClassType: "ApiManagementApiOperationTemplateParameterExampleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationTemplateParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiManagementApiOperationTemplateParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._example?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationTemplateParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._values = undefined;
      this._example.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._typeName = value.typeName;
      this._values = value.values;
      this._example.internalValue = value.example;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // example - computed: false, optional: true, required: false
  private _example = new ApiManagementApiOperationTemplateParameterExampleList(this, "example", false);
  public get example() {
    return this._example;
  }
  public putExample(value: ApiManagementApiOperationTemplateParameterExample[] | cdktf.IResolvable) {
    this._example.internalValue = value;
  }
  public resetExample() {
    this._example.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example.internalValue;
  }
}

export class ApiManagementApiOperationTemplateParameterList extends cdktf.ComplexList {
  public internalValue? : ApiManagementApiOperationTemplateParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiManagementApiOperationTemplateParameterOutputReference {
    return new ApiManagementApiOperationTemplateParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiManagementApiOperationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}
  */
  readonly update?: string;
}

export function apiManagementApiOperationTimeoutsToTerraform(struct?: ApiManagementApiOperationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apiManagementApiOperationTimeoutsToHclTerraform(struct?: ApiManagementApiOperationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiManagementApiOperationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiManagementApiOperationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiManagementApiOperationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation azurerm_api_management_api_operation}
*/
export class ApiManagementApiOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_api_management_api_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiManagementApiOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiManagementApiOperation to import
  * @param importFromId The id of the existing ApiManagementApiOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiManagementApiOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_api_management_api_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/api_management_api_operation azurerm_api_management_api_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementApiOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_operation',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiManagementName = config.apiManagementName;
    this._apiName = config.apiName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._method = config.method;
    this._operationId = config.operationId;
    this._resourceGroupName = config.resourceGroupName;
    this._urlTemplate = config.urlTemplate;
    this._request.internalValue = config.request;
    this._response.internalValue = config.response;
    this._templateParameter.internalValue = config.templateParameter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName?: string; 
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName;
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate;
  }

  // request - computed: false, optional: true, required: false
  private _request = new ApiManagementApiOperationRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: ApiManagementApiOperationRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new ApiManagementApiOperationResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: ApiManagementApiOperationResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // template_parameter - computed: false, optional: true, required: false
  private _templateParameter = new ApiManagementApiOperationTemplateParameterList(this, "template_parameter", false);
  public get templateParameter() {
    return this._templateParameter;
  }
  public putTemplateParameter(value: ApiManagementApiOperationTemplateParameter[] | cdktf.IResolvable) {
    this._templateParameter.internalValue = value;
  }
  public resetTemplateParameter() {
    this._templateParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParameterInput() {
    return this._templateParameter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiManagementApiOperationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiManagementApiOperationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      api_name: cdktf.stringToTerraform(this._apiName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      operation_id: cdktf.stringToTerraform(this._operationId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      url_template: cdktf.stringToTerraform(this._urlTemplate),
      request: apiManagementApiOperationRequestToTerraform(this._request.internalValue),
      response: cdktf.listMapper(apiManagementApiOperationResponseToTerraform, true)(this._response.internalValue),
      template_parameter: cdktf.listMapper(apiManagementApiOperationTemplateParameterToTerraform, true)(this._templateParameter.internalValue),
      timeouts: apiManagementApiOperationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_management_name: {
        value: cdktf.stringToHclTerraform(this._apiManagementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_name: {
        value: cdktf.stringToHclTerraform(this._apiName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_id: {
        value: cdktf.stringToHclTerraform(this._operationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_template: {
        value: cdktf.stringToHclTerraform(this._urlTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: apiManagementApiOperationRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiOperationRequestList",
      },
      response: {
        value: cdktf.listMapperHcl(apiManagementApiOperationResponseToHclTerraform, true)(this._response.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiOperationResponseList",
      },
      template_parameter: {
        value: cdktf.listMapperHcl(apiManagementApiOperationTemplateParameterToHclTerraform, true)(this._templateParameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiManagementApiOperationTemplateParameterList",
      },
      timeouts: {
        value: apiManagementApiOperationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiManagementApiOperationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
