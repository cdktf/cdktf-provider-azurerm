// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLogicAppStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#tags DataAzurermLogicAppStandard#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * site_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#site_config DataAzurermLogicAppStandard#site_config}
  */
  readonly siteConfig?: DataAzurermLogicAppStandardSiteConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#timeouts DataAzurermLogicAppStandard#timeouts}
  */
  readonly timeouts?: DataAzurermLogicAppStandardTimeouts;
}
export interface DataAzurermLogicAppStandardConnectionString {
}

export function dataAzurermLogicAppStandardConnectionStringToTerraform(struct?: DataAzurermLogicAppStandardConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLogicAppStandardConnectionStringToHclTerraform(struct?: DataAzurermLogicAppStandardConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLogicAppStandardConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermLogicAppStandardConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAzurermLogicAppStandardConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLogicAppStandardConnectionStringOutputReference {
    return new DataAzurermLogicAppStandardConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardIdentity {
}

export function dataAzurermLogicAppStandardIdentityToTerraform(struct?: DataAzurermLogicAppStandardIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLogicAppStandardIdentityToHclTerraform(struct?: DataAzurermLogicAppStandardIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLogicAppStandardIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermLogicAppStandardIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermLogicAppStandardIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLogicAppStandardIdentityOutputReference {
    return new DataAzurermLogicAppStandardIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteCredential {
}

export function dataAzurermLogicAppStandardSiteCredentialToTerraform(struct?: DataAzurermLogicAppStandardSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLogicAppStandardSiteCredentialToHclTerraform(struct?: DataAzurermLogicAppStandardSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLogicAppStandardSiteCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermLogicAppStandardSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAzurermLogicAppStandardSiteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLogicAppStandardSiteCredentialOutputReference {
    return new DataAzurermLogicAppStandardSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_azure_fdid DataAzurermLogicAppStandard#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_fd_health_probe DataAzurermLogicAppStandard#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_forwarded_for DataAzurermLogicAppStandard#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_forwarded_host DataAzurermLogicAppStandard#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function dataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedHost),
  }
}


export function dataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_azure_fdid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xAzureFdid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_fd_health_probe: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xFdHealthProbe),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_forwarded_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedFor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_forwarded_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedHost),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xAzureFdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAzureFdid = this._xAzureFdid;
    }
    if (this._xFdHealthProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFdHealthProbe = this._xFdHealthProbe;
    }
    if (this._xForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedFor = this._xForwardedFor;
    }
    if (this._xForwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedHost = this._xForwardedHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xAzureFdid = undefined;
      this._xFdHealthProbe = undefined;
      this._xForwardedFor = undefined;
      this._xForwardedHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xAzureFdid = value.xAzureFdid;
      this._xFdHealthProbe = value.xFdHealthProbe;
      this._xForwardedFor = value.xForwardedFor;
      this._xForwardedHost = value.xForwardedHost;
    }
  }

  // x_azure_fdid - computed: true, optional: true, required: false
  private _xAzureFdid?: string[]; 
  public get xAzureFdid() {
    return cdktf.Fn.tolist(this.getListAttribute('x_azure_fdid'));
  }
  public set xAzureFdid(value: string[]) {
    this._xAzureFdid = value;
  }
  public resetXAzureFdid() {
    this._xAzureFdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAzureFdidInput() {
    return this._xAzureFdid;
  }

  // x_fd_health_probe - computed: true, optional: true, required: false
  private _xFdHealthProbe?: string[]; 
  public get xFdHealthProbe() {
    return cdktf.Fn.tolist(this.getListAttribute('x_fd_health_probe'));
  }
  public set xFdHealthProbe(value: string[]) {
    this._xFdHealthProbe = value;
  }
  public resetXFdHealthProbe() {
    this._xFdHealthProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFdHealthProbeInput() {
    return this._xFdHealthProbe;
  }

  // x_forwarded_for - computed: true, optional: true, required: false
  private _xForwardedFor?: string[]; 
  public get xForwardedFor() {
    return cdktf.Fn.tolist(this.getListAttribute('x_forwarded_for'));
  }
  public set xForwardedFor(value: string[]) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // x_forwarded_host - computed: true, optional: true, required: false
  private _xForwardedHost?: string[]; 
  public get xForwardedHost() {
    return cdktf.Fn.tolist(this.getListAttribute('x_forwarded_host'));
  }
  public set xForwardedHost(value: string[]) {
    this._xForwardedHost = value;
  }
  public resetXForwardedHost() {
    this._xForwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedHostInput() {
    return this._xForwardedHost;
  }
}

export class DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference {
    return new DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#action DataAzurermLogicAppStandard#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#headers DataAzurermLogicAppStandard#headers}
  */
  readonly headers?: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#ip_address DataAzurermLogicAppStandard#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#priority DataAzurermLogicAppStandard#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#service_tag DataAzurermLogicAppStandard#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#virtual_network_subnet_id DataAzurermLogicAppStandard#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function dataAzurermLogicAppStandardSiteConfigIpRestrictionToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(dataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function dataAzurermLogicAppStandardSiteConfigIpRestrictionToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(dataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tag: {
      value: cdktf.stringToHclTerraform(struct!.serviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLogicAppStandardSiteConfigIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    if (this._virtualNetworkSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetId = this._virtualNetworkSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfigIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._headers.internalValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._serviceTag = undefined;
      this._virtualNetworkSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_tag - computed: true, optional: true, required: false
  private _serviceTag?: string; 
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
  public set serviceTag(value: string) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }

  // virtual_network_subnet_id - computed: true, optional: true, required: false
  private _virtualNetworkSubnetId?: string; 
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
  public set virtualNetworkSubnetId(value: string) {
    this._virtualNetworkSubnetId = value;
  }
  public resetVirtualNetworkSubnetId() {
    this._virtualNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdInput() {
    return this._virtualNetworkSubnetId;
  }
}

export class DataAzurermLogicAppStandardSiteConfigIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : DataAzurermLogicAppStandardSiteConfigIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference {
    return new DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_azure_fdid DataAzurermLogicAppStandard#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_fd_health_probe DataAzurermLogicAppStandard#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_forwarded_for DataAzurermLogicAppStandard#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#x_forwarded_host DataAzurermLogicAppStandard#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function dataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedHost),
  }
}


export function dataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_azure_fdid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xAzureFdid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_fd_health_probe: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xFdHealthProbe),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_forwarded_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedFor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x_forwarded_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedHost),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xAzureFdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAzureFdid = this._xAzureFdid;
    }
    if (this._xFdHealthProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFdHealthProbe = this._xFdHealthProbe;
    }
    if (this._xForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedFor = this._xForwardedFor;
    }
    if (this._xForwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedHost = this._xForwardedHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xAzureFdid = undefined;
      this._xFdHealthProbe = undefined;
      this._xForwardedFor = undefined;
      this._xForwardedHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xAzureFdid = value.xAzureFdid;
      this._xFdHealthProbe = value.xFdHealthProbe;
      this._xForwardedFor = value.xForwardedFor;
      this._xForwardedHost = value.xForwardedHost;
    }
  }

  // x_azure_fdid - computed: true, optional: true, required: false
  private _xAzureFdid?: string[]; 
  public get xAzureFdid() {
    return cdktf.Fn.tolist(this.getListAttribute('x_azure_fdid'));
  }
  public set xAzureFdid(value: string[]) {
    this._xAzureFdid = value;
  }
  public resetXAzureFdid() {
    this._xAzureFdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAzureFdidInput() {
    return this._xAzureFdid;
  }

  // x_fd_health_probe - computed: true, optional: true, required: false
  private _xFdHealthProbe?: string[]; 
  public get xFdHealthProbe() {
    return cdktf.Fn.tolist(this.getListAttribute('x_fd_health_probe'));
  }
  public set xFdHealthProbe(value: string[]) {
    this._xFdHealthProbe = value;
  }
  public resetXFdHealthProbe() {
    this._xFdHealthProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFdHealthProbeInput() {
    return this._xFdHealthProbe;
  }

  // x_forwarded_for - computed: true, optional: true, required: false
  private _xForwardedFor?: string[]; 
  public get xForwardedFor() {
    return cdktf.Fn.tolist(this.getListAttribute('x_forwarded_for'));
  }
  public set xForwardedFor(value: string[]) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // x_forwarded_host - computed: true, optional: true, required: false
  private _xForwardedHost?: string[]; 
  public get xForwardedHost() {
    return cdktf.Fn.tolist(this.getListAttribute('x_forwarded_host'));
  }
  public set xForwardedHost(value: string[]) {
    this._xForwardedHost = value;
  }
  public resetXForwardedHost() {
    this._xForwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedHostInput() {
    return this._xForwardedHost;
  }
}

export class DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference {
    return new DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteConfigScmIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#action DataAzurermLogicAppStandard#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#headers DataAzurermLogicAppStandard#headers}
  */
  readonly headers?: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#ip_address DataAzurermLogicAppStandard#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#priority DataAzurermLogicAppStandard#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#service_tag DataAzurermLogicAppStandard#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#virtual_network_subnet_id DataAzurermLogicAppStandard#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function dataAzurermLogicAppStandardSiteConfigScmIpRestrictionToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(dataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function dataAzurermLogicAppStandardSiteConfigScmIpRestrictionToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(dataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tag: {
      value: cdktf.stringToHclTerraform(struct!.serviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLogicAppStandardSiteConfigScmIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    if (this._virtualNetworkSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetId = this._virtualNetworkSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfigScmIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._headers.internalValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._serviceTag = undefined;
      this._virtualNetworkSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_tag - computed: true, optional: true, required: false
  private _serviceTag?: string; 
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
  public set serviceTag(value: string) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }

  // virtual_network_subnet_id - computed: true, optional: true, required: false
  private _virtualNetworkSubnetId?: string; 
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
  public set virtualNetworkSubnetId(value: string) {
    this._virtualNetworkSubnetId = value;
  }
  public resetVirtualNetworkSubnetId() {
    this._virtualNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdInput() {
    return this._virtualNetworkSubnetId;
  }
}

export class DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : DataAzurermLogicAppStandardSiteConfigScmIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference {
    return new DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLogicAppStandardSiteConfigCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#allowed_origins DataAzurermLogicAppStandard#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#support_credentials DataAzurermLogicAppStandard#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

export function dataAzurermLogicAppStandardSiteConfigCorsToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigCorsOutputReference | DataAzurermLogicAppStandardSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}


export function dataAzurermLogicAppStandardSiteConfigCorsToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigCorsOutputReference | DataAzurermLogicAppStandardSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    support_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.supportCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermLogicAppStandardSiteConfigCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._supportCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportCredentials = this._supportCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfigCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedOrigins = undefined;
      this._supportCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedOrigins = value.allowedOrigins;
      this._supportCredentials = value.supportCredentials;
    }
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // support_credentials - computed: false, optional: true, required: false
  private _supportCredentials?: boolean | cdktf.IResolvable; 
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials');
  }
  public set supportCredentials(value: boolean | cdktf.IResolvable) {
    this._supportCredentials = value;
  }
  public resetSupportCredentials() {
    this._supportCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCredentialsInput() {
    return this._supportCredentials;
  }
}
export interface DataAzurermLogicAppStandardSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#always_on DataAzurermLogicAppStandard#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#app_scale_limit DataAzurermLogicAppStandard#app_scale_limit}
  */
  readonly appScaleLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#dotnet_framework_version DataAzurermLogicAppStandard#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#elastic_instance_minimum DataAzurermLogicAppStandard#elastic_instance_minimum}
  */
  readonly elasticInstanceMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#ftps_state DataAzurermLogicAppStandard#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#health_check_path DataAzurermLogicAppStandard#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#http2_enabled DataAzurermLogicAppStandard#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#ip_restriction DataAzurermLogicAppStandard#ip_restriction}
  */
  readonly ipRestriction?: DataAzurermLogicAppStandardSiteConfigIpRestriction[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#linux_fx_version DataAzurermLogicAppStandard#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#min_tls_version DataAzurermLogicAppStandard#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#pre_warmed_instance_count DataAzurermLogicAppStandard#pre_warmed_instance_count}
  */
  readonly preWarmedInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#public_network_access_enabled DataAzurermLogicAppStandard#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#runtime_scale_monitoring_enabled DataAzurermLogicAppStandard#runtime_scale_monitoring_enabled}
  */
  readonly runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#scm_ip_restriction DataAzurermLogicAppStandard#scm_ip_restriction}
  */
  readonly scmIpRestriction?: DataAzurermLogicAppStandardSiteConfigScmIpRestriction[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#scm_min_tls_version DataAzurermLogicAppStandard#scm_min_tls_version}
  */
  readonly scmMinTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#scm_type DataAzurermLogicAppStandard#scm_type}
  */
  readonly scmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#scm_use_main_ip_restriction DataAzurermLogicAppStandard#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#use_32_bit_worker_process DataAzurermLogicAppStandard#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#vnet_route_all_enabled DataAzurermLogicAppStandard#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#websockets_enabled DataAzurermLogicAppStandard#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#cors DataAzurermLogicAppStandard#cors}
  */
  readonly cors?: DataAzurermLogicAppStandardSiteConfigCors;
}

export function dataAzurermLogicAppStandardSiteConfigToTerraform(struct?: DataAzurermLogicAppStandardSiteConfigOutputReference | DataAzurermLogicAppStandardSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    app_scale_limit: cdktf.numberToTerraform(struct!.appScaleLimit),
    dotnet_framework_version: cdktf.stringToTerraform(struct!.dotnetFrameworkVersion),
    elastic_instance_minimum: cdktf.numberToTerraform(struct!.elasticInstanceMinimum),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(dataAzurermLogicAppStandardSiteConfigIpRestrictionToTerraform, false)(struct!.ipRestriction),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    public_network_access_enabled: cdktf.booleanToTerraform(struct!.publicNetworkAccessEnabled),
    runtime_scale_monitoring_enabled: cdktf.booleanToTerraform(struct!.runtimeScaleMonitoringEnabled),
    scm_ip_restriction: cdktf.listMapper(dataAzurermLogicAppStandardSiteConfigScmIpRestrictionToTerraform, false)(struct!.scmIpRestriction),
    scm_min_tls_version: cdktf.stringToTerraform(struct!.scmMinTlsVersion),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: dataAzurermLogicAppStandardSiteConfigCorsToTerraform(struct!.cors),
  }
}


export function dataAzurermLogicAppStandardSiteConfigToHclTerraform(struct?: DataAzurermLogicAppStandardSiteConfigOutputReference | DataAzurermLogicAppStandardSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_on: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_scale_limit: {
      value: cdktf.numberToHclTerraform(struct!.appScaleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dotnet_framework_version: {
      value: cdktf.stringToHclTerraform(struct!.dotnetFrameworkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastic_instance_minimum: {
      value: cdktf.numberToHclTerraform(struct!.elasticInstanceMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftps_state: {
      value: cdktf.stringToHclTerraform(struct!.ftpsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_path: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_restriction: {
      value: cdktf.listMapperHcl(dataAzurermLogicAppStandardSiteConfigIpRestrictionToHclTerraform, false)(struct!.ipRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "DataAzurermLogicAppStandardSiteConfigIpRestrictionList",
    },
    linux_fx_version: {
      value: cdktf.stringToHclTerraform(struct!.linuxFxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_warmed_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.preWarmedInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_network_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.publicNetworkAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runtime_scale_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.runtimeScaleMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scm_ip_restriction: {
      value: cdktf.listMapperHcl(dataAzurermLogicAppStandardSiteConfigScmIpRestrictionToHclTerraform, false)(struct!.scmIpRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList",
    },
    scm_min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.scmMinTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_type: {
      value: cdktf.stringToHclTerraform(struct!.scmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_use_main_ip_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.scmUseMainIpRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_32_bit_worker_process: {
      value: cdktf.booleanToHclTerraform(struct!.use32BitWorkerProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_route_all_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vnetRouteAllEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    websockets_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.websocketsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cors: {
      value: dataAzurermLogicAppStandardSiteConfigCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAzurermLogicAppStandardSiteConfigCorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardSiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzurermLogicAppStandardSiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysOn = this._alwaysOn;
    }
    if (this._appScaleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appScaleLimit = this._appScaleLimit;
    }
    if (this._dotnetFrameworkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotnetFrameworkVersion = this._dotnetFrameworkVersion;
    }
    if (this._elasticInstanceMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticInstanceMinimum = this._elasticInstanceMinimum;
    }
    if (this._ftpsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpsState = this._ftpsState;
    }
    if (this._healthCheckPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
    if (this._ipRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestriction = this._ipRestriction?.internalValue;
    }
    if (this._linuxFxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxFxVersion = this._linuxFxVersion;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._preWarmedInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.preWarmedInstanceCount = this._preWarmedInstanceCount;
    }
    if (this._publicNetworkAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkAccessEnabled = this._publicNetworkAccessEnabled;
    }
    if (this._runtimeScaleMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeScaleMonitoringEnabled = this._runtimeScaleMonitoringEnabled;
    }
    if (this._scmIpRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmIpRestriction = this._scmIpRestriction?.internalValue;
    }
    if (this._scmMinTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmMinTlsVersion = this._scmMinTlsVersion;
    }
    if (this._scmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmType = this._scmType;
    }
    if (this._scmUseMainIpRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmUseMainIpRestriction = this._scmUseMainIpRestriction;
    }
    if (this._use32BitWorkerProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.use32BitWorkerProcess = this._use32BitWorkerProcess;
    }
    if (this._vnetRouteAllEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetRouteAllEnabled = this._vnetRouteAllEnabled;
    }
    if (this._websocketsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocketsEnabled = this._websocketsEnabled;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOn = undefined;
      this._appScaleLimit = undefined;
      this._dotnetFrameworkVersion = undefined;
      this._elasticInstanceMinimum = undefined;
      this._ftpsState = undefined;
      this._healthCheckPath = undefined;
      this._http2Enabled = undefined;
      this._ipRestriction.internalValue = undefined;
      this._linuxFxVersion = undefined;
      this._minTlsVersion = undefined;
      this._preWarmedInstanceCount = undefined;
      this._publicNetworkAccessEnabled = undefined;
      this._runtimeScaleMonitoringEnabled = undefined;
      this._scmIpRestriction.internalValue = undefined;
      this._scmMinTlsVersion = undefined;
      this._scmType = undefined;
      this._scmUseMainIpRestriction = undefined;
      this._use32BitWorkerProcess = undefined;
      this._vnetRouteAllEnabled = undefined;
      this._websocketsEnabled = undefined;
      this._cors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysOn = value.alwaysOn;
      this._appScaleLimit = value.appScaleLimit;
      this._dotnetFrameworkVersion = value.dotnetFrameworkVersion;
      this._elasticInstanceMinimum = value.elasticInstanceMinimum;
      this._ftpsState = value.ftpsState;
      this._healthCheckPath = value.healthCheckPath;
      this._http2Enabled = value.http2Enabled;
      this._ipRestriction.internalValue = value.ipRestriction;
      this._linuxFxVersion = value.linuxFxVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._preWarmedInstanceCount = value.preWarmedInstanceCount;
      this._publicNetworkAccessEnabled = value.publicNetworkAccessEnabled;
      this._runtimeScaleMonitoringEnabled = value.runtimeScaleMonitoringEnabled;
      this._scmIpRestriction.internalValue = value.scmIpRestriction;
      this._scmMinTlsVersion = value.scmMinTlsVersion;
      this._scmType = value.scmType;
      this._scmUseMainIpRestriction = value.scmUseMainIpRestriction;
      this._use32BitWorkerProcess = value.use32BitWorkerProcess;
      this._vnetRouteAllEnabled = value.vnetRouteAllEnabled;
      this._websocketsEnabled = value.websocketsEnabled;
      this._cors.internalValue = value.cors;
    }
  }

  // always_on - computed: false, optional: true, required: false
  private _alwaysOn?: boolean | cdktf.IResolvable; 
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on');
  }
  public set alwaysOn(value: boolean | cdktf.IResolvable) {
    this._alwaysOn = value;
  }
  public resetAlwaysOn() {
    this._alwaysOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOnInput() {
    return this._alwaysOn;
  }

  // app_scale_limit - computed: true, optional: true, required: false
  private _appScaleLimit?: number; 
  public get appScaleLimit() {
    return this.getNumberAttribute('app_scale_limit');
  }
  public set appScaleLimit(value: number) {
    this._appScaleLimit = value;
  }
  public resetAppScaleLimit() {
    this._appScaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScaleLimitInput() {
    return this._appScaleLimit;
  }

  // auto_swap_slot_name - computed: true, optional: false, required: false
  public get autoSwapSlotName() {
    return this.getStringAttribute('auto_swap_slot_name');
  }

  // dotnet_framework_version - computed: false, optional: true, required: false
  private _dotnetFrameworkVersion?: string; 
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }
  public set dotnetFrameworkVersion(value: string) {
    this._dotnetFrameworkVersion = value;
  }
  public resetDotnetFrameworkVersion() {
    this._dotnetFrameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetFrameworkVersionInput() {
    return this._dotnetFrameworkVersion;
  }

  // elastic_instance_minimum - computed: true, optional: true, required: false
  private _elasticInstanceMinimum?: number; 
  public get elasticInstanceMinimum() {
    return this.getNumberAttribute('elastic_instance_minimum');
  }
  public set elasticInstanceMinimum(value: number) {
    this._elasticInstanceMinimum = value;
  }
  public resetElasticInstanceMinimum() {
    this._elasticInstanceMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInstanceMinimumInput() {
    return this._elasticInstanceMinimum;
  }

  // ftps_state - computed: true, optional: true, required: false
  private _ftpsState?: string; 
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }
  public set ftpsState(value: string) {
    this._ftpsState = value;
  }
  public resetFtpsState() {
    this._ftpsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsStateInput() {
    return this._ftpsState;
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
  }

  // ip_restriction - computed: true, optional: true, required: false
  private _ipRestriction = new DataAzurermLogicAppStandardSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }
  public putIpRestriction(value: DataAzurermLogicAppStandardSiteConfigIpRestriction[] | cdktf.IResolvable) {
    this._ipRestriction.internalValue = value;
  }
  public resetIpRestriction() {
    this._ipRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction.internalValue;
  }

  // linux_fx_version - computed: true, optional: true, required: false
  private _linuxFxVersion?: string; 
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }
  public set linuxFxVersion(value: string) {
    this._linuxFxVersion = value;
  }
  public resetLinuxFxVersion() {
    this._linuxFxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxFxVersionInput() {
    return this._linuxFxVersion;
  }

  // min_tls_version - computed: true, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // pre_warmed_instance_count - computed: true, optional: true, required: false
  private _preWarmedInstanceCount?: number; 
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }
  public set preWarmedInstanceCount(value: number) {
    this._preWarmedInstanceCount = value;
  }
  public resetPreWarmedInstanceCount() {
    this._preWarmedInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWarmedInstanceCountInput() {
    return this._preWarmedInstanceCount;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // runtime_scale_monitoring_enabled - computed: false, optional: true, required: false
  private _runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled');
  }
  public set runtimeScaleMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._runtimeScaleMonitoringEnabled = value;
  }
  public resetRuntimeScaleMonitoringEnabled() {
    this._runtimeScaleMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeScaleMonitoringEnabledInput() {
    return this._runtimeScaleMonitoringEnabled;
  }

  // scm_ip_restriction - computed: true, optional: true, required: false
  private _scmIpRestriction = new DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
  public get scmIpRestriction() {
    return this._scmIpRestriction;
  }
  public putScmIpRestriction(value: DataAzurermLogicAppStandardSiteConfigScmIpRestriction[] | cdktf.IResolvable) {
    this._scmIpRestriction.internalValue = value;
  }
  public resetScmIpRestriction() {
    this._scmIpRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionInput() {
    return this._scmIpRestriction.internalValue;
  }

  // scm_min_tls_version - computed: true, optional: true, required: false
  private _scmMinTlsVersion?: string; 
  public get scmMinTlsVersion() {
    return this.getStringAttribute('scm_min_tls_version');
  }
  public set scmMinTlsVersion(value: string) {
    this._scmMinTlsVersion = value;
  }
  public resetScmMinTlsVersion() {
    this._scmMinTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmMinTlsVersionInput() {
    return this._scmMinTlsVersion;
  }

  // scm_type - computed: true, optional: true, required: false
  private _scmType?: string; 
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }
  public set scmType(value: string) {
    this._scmType = value;
  }
  public resetScmType() {
    this._scmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmTypeInput() {
    return this._scmType;
  }

  // scm_use_main_ip_restriction - computed: false, optional: true, required: false
  private _scmUseMainIpRestriction?: boolean | cdktf.IResolvable; 
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction');
  }
  public set scmUseMainIpRestriction(value: boolean | cdktf.IResolvable) {
    this._scmUseMainIpRestriction = value;
  }
  public resetScmUseMainIpRestriction() {
    this._scmUseMainIpRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUseMainIpRestrictionInput() {
    return this._scmUseMainIpRestriction;
  }

  // use_32_bit_worker_process - computed: false, optional: true, required: false
  private _use32BitWorkerProcess?: boolean | cdktf.IResolvable; 
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process');
  }
  public set use32BitWorkerProcess(value: boolean | cdktf.IResolvable) {
    this._use32BitWorkerProcess = value;
  }
  public resetUse32BitWorkerProcess() {
    this._use32BitWorkerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get use32BitWorkerProcessInput() {
    return this._use32BitWorkerProcess;
  }

  // vnet_route_all_enabled - computed: true, optional: true, required: false
  private _vnetRouteAllEnabled?: boolean | cdktf.IResolvable; 
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled');
  }
  public set vnetRouteAllEnabled(value: boolean | cdktf.IResolvable) {
    this._vnetRouteAllEnabled = value;
  }
  public resetVnetRouteAllEnabled() {
    this._vnetRouteAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetRouteAllEnabledInput() {
    return this._vnetRouteAllEnabled;
  }

  // websockets_enabled - computed: false, optional: true, required: false
  private _websocketsEnabled?: boolean | cdktf.IResolvable; 
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }
  public set websocketsEnabled(value: boolean | cdktf.IResolvable) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new DataAzurermLogicAppStandardSiteConfigCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: DataAzurermLogicAppStandardSiteConfigCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }
}
export interface DataAzurermLogicAppStandardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}
  */
  readonly read?: string;
}

export function dataAzurermLogicAppStandardTimeoutsToTerraform(struct?: DataAzurermLogicAppStandardTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermLogicAppStandardTimeoutsToHclTerraform(struct?: DataAzurermLogicAppStandardTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermLogicAppStandardTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermLogicAppStandardTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLogicAppStandardTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard azurerm_logic_app_standard}
*/
export class DataAzurermLogicAppStandard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_logic_app_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermLogicAppStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermLogicAppStandard to import
  * @param importFromId The id of the existing DataAzurermLogicAppStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermLogicAppStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_logic_app_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/logic_app_standard azurerm_logic_app_standard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermLogicAppStandardConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermLogicAppStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_standard',
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._siteConfig.internalValue = config.siteConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: true, optional: false, required: false
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }

  // app_settings - computed: true, optional: false, required: false
  private _appSettings = new cdktf.StringMap(this, "app_settings");
  public get appSettings() {
    return this._appSettings;
  }

  // bundle_version - computed: true, optional: false, required: false
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }

  // client_affinity_enabled - computed: true, optional: false, required: false
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }

  // client_certificate_mode - computed: true, optional: false, required: false
  public get clientCertificateMode() {
    return this.getStringAttribute('client_certificate_mode');
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataAzurermLogicAppStandardConnectionStringList(this, "connection_string", true);
  public get connectionString() {
    return this._connectionString;
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // https_only - computed: true, optional: false, required: false
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
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

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermLogicAppStandardIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: false
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
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

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new DataAzurermLogicAppStandardSiteCredentialList(this, "site_credential", false);
  public get siteCredential() {
    return this._siteCredential;
  }

  // storage_account_access_key - computed: true, optional: false, required: false
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // storage_account_share_name - computed: true, optional: false, required: false
  public get storageAccountShareName() {
    return this.getStringAttribute('storage_account_share_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_extension_bundle - computed: true, optional: false, required: false
  public get useExtensionBundle() {
    return this.getBooleanAttribute('use_extension_bundle');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig = new DataAzurermLogicAppStandardSiteConfigOutputReference(this, "site_config");
  public get siteConfig() {
    return this._siteConfig;
  }
  public putSiteConfig(value: DataAzurermLogicAppStandardSiteConfig) {
    this._siteConfig.internalValue = value;
  }
  public resetSiteConfig() {
    this._siteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermLogicAppStandardTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermLogicAppStandardTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      site_config: dataAzurermLogicAppStandardSiteConfigToTerraform(this._siteConfig.internalValue),
      timeouts: dataAzurermLogicAppStandardTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      site_config: {
        value: dataAzurermLogicAppStandardSiteConfigToHclTerraform(this._siteConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermLogicAppStandardSiteConfigList",
      },
      timeouts: {
        value: dataAzurermLogicAppStandardTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermLogicAppStandardTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
