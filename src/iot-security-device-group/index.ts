// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecurityDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}
  */
  readonly name: string;
  /**
  * allow_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}
  */
  readonly allowRule?: IotSecurityDeviceGroupAllowRule;
  /**
  * range_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}
  */
  readonly rangeRule?: IotSecurityDeviceGroupRangeRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}
  */
  readonly timeouts?: IotSecurityDeviceGroupTimeouts;
}
export interface IotSecurityDeviceGroupAllowRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}
  */
  readonly connectionFromIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}
  */
  readonly connectionToIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}
  */
  readonly localUsersNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}
  */
  readonly processesNotAllowed?: string[];
}

export function iotSecurityDeviceGroupAllowRuleToTerraform(struct?: IotSecurityDeviceGroupAllowRuleOutputReference | IotSecurityDeviceGroupAllowRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_from_ips_not_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionFromIpsNotAllowed),
    connection_to_ips_not_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionToIpsNotAllowed),
    local_users_not_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localUsersNotAllowed),
    processes_not_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processesNotAllowed),
  }
}


export function iotSecurityDeviceGroupAllowRuleToHclTerraform(struct?: IotSecurityDeviceGroupAllowRuleOutputReference | IotSecurityDeviceGroupAllowRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_from_ips_not_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionFromIpsNotAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    connection_to_ips_not_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionToIpsNotAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_users_not_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localUsersNotAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    processes_not_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processesNotAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityDeviceGroupAllowRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotSecurityDeviceGroupAllowRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionFromIpsNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionFromIpsNotAllowed = this._connectionFromIpsNotAllowed;
    }
    if (this._connectionToIpsNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionToIpsNotAllowed = this._connectionToIpsNotAllowed;
    }
    if (this._localUsersNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUsersNotAllowed = this._localUsersNotAllowed;
    }
    if (this._processesNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.processesNotAllowed = this._processesNotAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityDeviceGroupAllowRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionFromIpsNotAllowed = undefined;
      this._connectionToIpsNotAllowed = undefined;
      this._localUsersNotAllowed = undefined;
      this._processesNotAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionFromIpsNotAllowed = value.connectionFromIpsNotAllowed;
      this._connectionToIpsNotAllowed = value.connectionToIpsNotAllowed;
      this._localUsersNotAllowed = value.localUsersNotAllowed;
      this._processesNotAllowed = value.processesNotAllowed;
    }
  }

  // connection_from_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionFromIpsNotAllowed?: string[]; 
  public get connectionFromIpsNotAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_from_ips_not_allowed'));
  }
  public set connectionFromIpsNotAllowed(value: string[]) {
    this._connectionFromIpsNotAllowed = value;
  }
  public resetConnectionFromIpsNotAllowed() {
    this._connectionFromIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFromIpsNotAllowedInput() {
    return this._connectionFromIpsNotAllowed;
  }

  // connection_to_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionToIpsNotAllowed?: string[]; 
  public get connectionToIpsNotAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_to_ips_not_allowed'));
  }
  public set connectionToIpsNotAllowed(value: string[]) {
    this._connectionToIpsNotAllowed = value;
  }
  public resetConnectionToIpsNotAllowed() {
    this._connectionToIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionToIpsNotAllowedInput() {
    return this._connectionToIpsNotAllowed;
  }

  // local_users_not_allowed - computed: false, optional: true, required: false
  private _localUsersNotAllowed?: string[]; 
  public get localUsersNotAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('local_users_not_allowed'));
  }
  public set localUsersNotAllowed(value: string[]) {
    this._localUsersNotAllowed = value;
  }
  public resetLocalUsersNotAllowed() {
    this._localUsersNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUsersNotAllowedInput() {
    return this._localUsersNotAllowed;
  }

  // processes_not_allowed - computed: false, optional: true, required: false
  private _processesNotAllowed?: string[]; 
  public get processesNotAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('processes_not_allowed'));
  }
  public set processesNotAllowed(value: string[]) {
    this._processesNotAllowed = value;
  }
  public resetProcessesNotAllowed() {
    this._processesNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesNotAllowedInput() {
    return this._processesNotAllowed;
  }
}
export interface IotSecurityDeviceGroupRangeRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}
  */
  readonly min: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}
  */
  readonly type: string;
}

export function iotSecurityDeviceGroupRangeRuleToTerraform(struct?: IotSecurityDeviceGroupRangeRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iotSecurityDeviceGroupRangeRuleToHclTerraform(struct?: IotSecurityDeviceGroupRangeRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityDeviceGroupRangeRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotSecurityDeviceGroupRangeRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityDeviceGroupRangeRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._max = undefined;
      this._min = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._max = value.max;
      this._min = value.min;
      this._type = value.type;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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
}

export class IotSecurityDeviceGroupRangeRuleList extends cdktf.ComplexList {
  public internalValue? : IotSecurityDeviceGroupRangeRule[] | cdktf.IResolvable

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
  public get(index: number): IotSecurityDeviceGroupRangeRuleOutputReference {
    return new IotSecurityDeviceGroupRangeRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotSecurityDeviceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}
  */
  readonly update?: string;
}

export function iotSecurityDeviceGroupTimeoutsToTerraform(struct?: IotSecurityDeviceGroupTimeouts | cdktf.IResolvable): any {
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


export function iotSecurityDeviceGroupTimeoutsToHclTerraform(struct?: IotSecurityDeviceGroupTimeouts | cdktf.IResolvable): any {
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

export class IotSecurityDeviceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityDeviceGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotSecurityDeviceGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group azurerm_iot_security_device_group}
*/
export class IotSecurityDeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iot_security_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotSecurityDeviceGroup to import
  * @param importFromId The id of the existing IotSecurityDeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotSecurityDeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iot_security_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iot_security_device_group azurerm_iot_security_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecurityDeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotSecurityDeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_security_device_group',
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
    this._id = config.id;
    this._iothubId = config.iothubId;
    this._name = config.name;
    this._allowRule.internalValue = config.allowRule;
    this._rangeRule.internalValue = config.rangeRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId?: string; 
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId;
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

  // allow_rule - computed: false, optional: true, required: false
  private _allowRule = new IotSecurityDeviceGroupAllowRuleOutputReference(this, "allow_rule");
  public get allowRule() {
    return this._allowRule;
  }
  public putAllowRule(value: IotSecurityDeviceGroupAllowRule) {
    this._allowRule.internalValue = value;
  }
  public resetAllowRule() {
    this._allowRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRuleInput() {
    return this._allowRule.internalValue;
  }

  // range_rule - computed: false, optional: true, required: false
  private _rangeRule = new IotSecurityDeviceGroupRangeRuleList(this, "range_rule", true);
  public get rangeRule() {
    return this._rangeRule;
  }
  public putRangeRule(value: IotSecurityDeviceGroupRangeRule[] | cdktf.IResolvable) {
    this._rangeRule.internalValue = value;
  }
  public resetRangeRule() {
    this._rangeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeRuleInput() {
    return this._rangeRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotSecurityDeviceGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotSecurityDeviceGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      name: cdktf.stringToTerraform(this._name),
      allow_rule: iotSecurityDeviceGroupAllowRuleToTerraform(this._allowRule.internalValue),
      range_rule: cdktf.listMapper(iotSecurityDeviceGroupRangeRuleToTerraform, true)(this._rangeRule.internalValue),
      timeouts: iotSecurityDeviceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iothub_id: {
        value: cdktf.stringToHclTerraform(this._iothubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_rule: {
        value: iotSecurityDeviceGroupAllowRuleToHclTerraform(this._allowRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotSecurityDeviceGroupAllowRuleList",
      },
      range_rule: {
        value: cdktf.listMapperHcl(iotSecurityDeviceGroupRangeRuleToHclTerraform, true)(this._rangeRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotSecurityDeviceGroupRangeRuleList",
      },
      timeouts: {
        value: iotSecurityDeviceGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotSecurityDeviceGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
