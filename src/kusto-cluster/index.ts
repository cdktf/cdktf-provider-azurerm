// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}
  */
  readonly allowedFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}
  */
  readonly autoStopEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}
  */
  readonly diskEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}
  */
  readonly doubleEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#id KustoCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#location KustoCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#name KustoCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}
  */
  readonly outboundNetworkAccessRestricted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#public_ip_type KustoCluster#public_ip_type}
  */
  readonly publicIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#purge_enabled KustoCluster#purge_enabled}
  */
  readonly purgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#resource_group_name KustoCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}
  */
  readonly streamingIngestionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#tags KustoCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}
  */
  readonly trustedExternalTenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#zones KustoCluster#zones}
  */
  readonly zones?: string[];
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#identity KustoCluster#identity}
  */
  readonly identity?: KustoClusterIdentity;
  /**
  * language_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#language_extensions KustoCluster#language_extensions}
  */
  readonly languageExtensions?: KustoClusterLanguageExtensions[] | cdktf.IResolvable;
  /**
  * optimized_auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#optimized_auto_scale KustoCluster#optimized_auto_scale}
  */
  readonly optimizedAutoScale?: KustoClusterOptimizedAutoScale;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#sku KustoCluster#sku}
  */
  readonly sku: KustoClusterSku;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#timeouts KustoCluster#timeouts}
  */
  readonly timeouts?: KustoClusterTimeouts;
  /**
  * virtual_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#virtual_network_configuration KustoCluster#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration;
}
export interface KustoClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#identity_ids KustoCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#type KustoCluster#type}
  */
  readonly type: string;
}

export function kustoClusterIdentityToTerraform(struct?: KustoClusterIdentityOutputReference | KustoClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kustoClusterIdentityToHclTerraform(struct?: KustoClusterIdentityOutputReference | KustoClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class KustoClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KustoClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface KustoClusterLanguageExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#image KustoCluster#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#name KustoCluster#name}
  */
  readonly name: string;
}

export function kustoClusterLanguageExtensionsToTerraform(struct?: KustoClusterLanguageExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kustoClusterLanguageExtensionsToHclTerraform(struct?: KustoClusterLanguageExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoClusterLanguageExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KustoClusterLanguageExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterLanguageExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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
}

export class KustoClusterLanguageExtensionsList extends cdktf.ComplexList {
  public internalValue? : KustoClusterLanguageExtensions[] | cdktf.IResolvable

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
  public get(index: number): KustoClusterLanguageExtensionsOutputReference {
    return new KustoClusterLanguageExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KustoClusterOptimizedAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#maximum_instances KustoCluster#maximum_instances}
  */
  readonly maximumInstances: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#minimum_instances KustoCluster#minimum_instances}
  */
  readonly minimumInstances: number;
}

export function kustoClusterOptimizedAutoScaleToTerraform(struct?: KustoClusterOptimizedAutoScaleOutputReference | KustoClusterOptimizedAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_instances: cdktf.numberToTerraform(struct!.maximumInstances),
    minimum_instances: cdktf.numberToTerraform(struct!.minimumInstances),
  }
}


export function kustoClusterOptimizedAutoScaleToHclTerraform(struct?: KustoClusterOptimizedAutoScaleOutputReference | KustoClusterOptimizedAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_instances: {
      value: cdktf.numberToHclTerraform(struct!.maximumInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_instances: {
      value: cdktf.numberToHclTerraform(struct!.minimumInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoClusterOptimizedAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KustoClusterOptimizedAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumInstances = this._maximumInstances;
    }
    if (this._minimumInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInstances = this._minimumInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterOptimizedAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumInstances = undefined;
      this._minimumInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumInstances = value.maximumInstances;
      this._minimumInstances = value.minimumInstances;
    }
  }

  // maximum_instances - computed: false, optional: false, required: true
  private _maximumInstances?: number; 
  public get maximumInstances() {
    return this.getNumberAttribute('maximum_instances');
  }
  public set maximumInstances(value: number) {
    this._maximumInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInstancesInput() {
    return this._maximumInstances;
  }

  // minimum_instances - computed: false, optional: false, required: true
  private _minimumInstances?: number; 
  public get minimumInstances() {
    return this.getNumberAttribute('minimum_instances');
  }
  public set minimumInstances(value: number) {
    this._minimumInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstancesInput() {
    return this._minimumInstances;
  }
}
export interface KustoClusterSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#capacity KustoCluster#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#name KustoCluster#name}
  */
  readonly name: string;
}

export function kustoClusterSkuToTerraform(struct?: KustoClusterSkuOutputReference | KustoClusterSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kustoClusterSkuToHclTerraform(struct?: KustoClusterSkuOutputReference | KustoClusterSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoClusterSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KustoClusterSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
}
export interface KustoClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#create KustoCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#delete KustoCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#read KustoCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#update KustoCluster#update}
  */
  readonly update?: string;
}

export function kustoClusterTimeoutsToTerraform(struct?: KustoClusterTimeouts | cdktf.IResolvable): any {
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


export function kustoClusterTimeoutsToHclTerraform(struct?: KustoClusterTimeouts | cdktf.IResolvable): any {
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

export class KustoClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KustoClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KustoClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface KustoClusterVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}
  */
  readonly dataManagementPublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}
  */
  readonly enginePublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#subnet_id KustoCluster#subnet_id}
  */
  readonly subnetId: string;
}

export function kustoClusterVirtualNetworkConfigurationToTerraform(struct?: KustoClusterVirtualNetworkConfigurationOutputReference | KustoClusterVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_management_public_ip_id: cdktf.stringToTerraform(struct!.dataManagementPublicIpId),
    engine_public_ip_id: cdktf.stringToTerraform(struct!.enginePublicIpId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function kustoClusterVirtualNetworkConfigurationToHclTerraform(struct?: KustoClusterVirtualNetworkConfigurationOutputReference | KustoClusterVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_management_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.dataManagementPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.enginePublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoClusterVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KustoClusterVirtualNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataManagementPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataManagementPublicIpId = this._dataManagementPublicIpId;
    }
    if (this._enginePublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enginePublicIpId = this._enginePublicIpId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterVirtualNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataManagementPublicIpId = undefined;
      this._enginePublicIpId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataManagementPublicIpId = value.dataManagementPublicIpId;
      this._enginePublicIpId = value.enginePublicIpId;
      this._subnetId = value.subnetId;
    }
  }

  // data_management_public_ip_id - computed: false, optional: false, required: true
  private _dataManagementPublicIpId?: string; 
  public get dataManagementPublicIpId() {
    return this.getStringAttribute('data_management_public_ip_id');
  }
  public set dataManagementPublicIpId(value: string) {
    this._dataManagementPublicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataManagementPublicIpIdInput() {
    return this._dataManagementPublicIpId;
  }

  // engine_public_ip_id - computed: false, optional: false, required: true
  private _enginePublicIpId?: string; 
  public get enginePublicIpId() {
    return this.getStringAttribute('engine_public_ip_id');
  }
  public set enginePublicIpId(value: string) {
    this._enginePublicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enginePublicIpIdInput() {
    return this._enginePublicIpId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster azurerm_kusto_cluster}
*/
export class KustoCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kusto_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KustoCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KustoCluster to import
  * @param importFromId The id of the existing KustoCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KustoCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kusto_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_cluster azurerm_kusto_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KustoClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_cluster',
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
    this._allowedFqdns = config.allowedFqdns;
    this._allowedIpRanges = config.allowedIpRanges;
    this._autoStopEnabled = config.autoStopEnabled;
    this._diskEncryptionEnabled = config.diskEncryptionEnabled;
    this._doubleEncryptionEnabled = config.doubleEncryptionEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._outboundNetworkAccessRestricted = config.outboundNetworkAccessRestricted;
    this._publicIpType = config.publicIpType;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purgeEnabled = config.purgeEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._streamingIngestionEnabled = config.streamingIngestionEnabled;
    this._tags = config.tags;
    this._trustedExternalTenants = config.trustedExternalTenants;
    this._zones = config.zones;
    this._identity.internalValue = config.identity;
    this._languageExtensions.internalValue = config.languageExtensions;
    this._optimizedAutoScale.internalValue = config.optimizedAutoScale;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
    this._virtualNetworkConfiguration.internalValue = config.virtualNetworkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_fqdns - computed: false, optional: true, required: false
  private _allowedFqdns?: string[]; 
  public get allowedFqdns() {
    return this.getListAttribute('allowed_fqdns');
  }
  public set allowedFqdns(value: string[]) {
    this._allowedFqdns = value;
  }
  public resetAllowedFqdns() {
    this._allowedFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFqdnsInput() {
    return this._allowedFqdns;
  }

  // allowed_ip_ranges - computed: false, optional: true, required: false
  private _allowedIpRanges?: string[]; 
  public get allowedIpRanges() {
    return this.getListAttribute('allowed_ip_ranges');
  }
  public set allowedIpRanges(value: string[]) {
    this._allowedIpRanges = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges;
  }

  // auto_stop_enabled - computed: false, optional: true, required: false
  private _autoStopEnabled?: boolean | cdktf.IResolvable; 
  public get autoStopEnabled() {
    return this.getBooleanAttribute('auto_stop_enabled');
  }
  public set autoStopEnabled(value: boolean | cdktf.IResolvable) {
    this._autoStopEnabled = value;
  }
  public resetAutoStopEnabled() {
    this._autoStopEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopEnabledInput() {
    return this._autoStopEnabled;
  }

  // data_ingestion_uri - computed: true, optional: false, required: false
  public get dataIngestionUri() {
    return this.getStringAttribute('data_ingestion_uri');
  }

  // disk_encryption_enabled - computed: false, optional: true, required: false
  private _diskEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get diskEncryptionEnabled() {
    return this.getBooleanAttribute('disk_encryption_enabled');
  }
  public set diskEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._diskEncryptionEnabled = value;
  }
  public resetDiskEncryptionEnabled() {
    this._diskEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionEnabledInput() {
    return this._diskEncryptionEnabled;
  }

  // double_encryption_enabled - computed: false, optional: true, required: false
  private _doubleEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get doubleEncryptionEnabled() {
    return this.getBooleanAttribute('double_encryption_enabled');
  }
  public set doubleEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._doubleEncryptionEnabled = value;
  }
  public resetDoubleEncryptionEnabled() {
    this._doubleEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleEncryptionEnabledInput() {
    return this._doubleEncryptionEnabled;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // outbound_network_access_restricted - computed: false, optional: true, required: false
  private _outboundNetworkAccessRestricted?: boolean | cdktf.IResolvable; 
  public get outboundNetworkAccessRestricted() {
    return this.getBooleanAttribute('outbound_network_access_restricted');
  }
  public set outboundNetworkAccessRestricted(value: boolean | cdktf.IResolvable) {
    this._outboundNetworkAccessRestricted = value;
  }
  public resetOutboundNetworkAccessRestricted() {
    this._outboundNetworkAccessRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkAccessRestrictedInput() {
    return this._outboundNetworkAccessRestricted;
  }

  // public_ip_type - computed: false, optional: true, required: false
  private _publicIpType?: string; 
  public get publicIpType() {
    return this.getStringAttribute('public_ip_type');
  }
  public set publicIpType(value: string) {
    this._publicIpType = value;
  }
  public resetPublicIpType() {
    this._publicIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpTypeInput() {
    return this._publicIpType;
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

  // purge_enabled - computed: false, optional: true, required: false
  private _purgeEnabled?: boolean | cdktf.IResolvable; 
  public get purgeEnabled() {
    return this.getBooleanAttribute('purge_enabled');
  }
  public set purgeEnabled(value: boolean | cdktf.IResolvable) {
    this._purgeEnabled = value;
  }
  public resetPurgeEnabled() {
    this._purgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeEnabledInput() {
    return this._purgeEnabled;
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

  // streaming_ingestion_enabled - computed: false, optional: true, required: false
  private _streamingIngestionEnabled?: boolean | cdktf.IResolvable; 
  public get streamingIngestionEnabled() {
    return this.getBooleanAttribute('streaming_ingestion_enabled');
  }
  public set streamingIngestionEnabled(value: boolean | cdktf.IResolvable) {
    this._streamingIngestionEnabled = value;
  }
  public resetStreamingIngestionEnabled() {
    this._streamingIngestionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingIngestionEnabledInput() {
    return this._streamingIngestionEnabled;
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

  // trusted_external_tenants - computed: true, optional: true, required: false
  private _trustedExternalTenants?: string[]; 
  public get trustedExternalTenants() {
    return this.getListAttribute('trusted_external_tenants');
  }
  public set trustedExternalTenants(value: string[]) {
    this._trustedExternalTenants = value;
  }
  public resetTrustedExternalTenants() {
    this._trustedExternalTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedExternalTenantsInput() {
    return this._trustedExternalTenants;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new KustoClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: KustoClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // language_extensions - computed: false, optional: true, required: false
  private _languageExtensions = new KustoClusterLanguageExtensionsList(this, "language_extensions", false);
  public get languageExtensions() {
    return this._languageExtensions;
  }
  public putLanguageExtensions(value: KustoClusterLanguageExtensions[] | cdktf.IResolvable) {
    this._languageExtensions.internalValue = value;
  }
  public resetLanguageExtensions() {
    this._languageExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageExtensionsInput() {
    return this._languageExtensions.internalValue;
  }

  // optimized_auto_scale - computed: false, optional: true, required: false
  private _optimizedAutoScale = new KustoClusterOptimizedAutoScaleOutputReference(this, "optimized_auto_scale");
  public get optimizedAutoScale() {
    return this._optimizedAutoScale;
  }
  public putOptimizedAutoScale(value: KustoClusterOptimizedAutoScale) {
    this._optimizedAutoScale.internalValue = value;
  }
  public resetOptimizedAutoScale() {
    this._optimizedAutoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedAutoScaleInput() {
    return this._optimizedAutoScale.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new KustoClusterSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: KustoClusterSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KustoClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KustoClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration = new KustoClusterVirtualNetworkConfigurationOutputReference(this, "virtual_network_configuration");
  public get virtualNetworkConfiguration() {
    return this._virtualNetworkConfiguration;
  }
  public putVirtualNetworkConfiguration(value: KustoClusterVirtualNetworkConfiguration) {
    this._virtualNetworkConfiguration.internalValue = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedFqdns),
      allowed_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpRanges),
      auto_stop_enabled: cdktf.booleanToTerraform(this._autoStopEnabled),
      disk_encryption_enabled: cdktf.booleanToTerraform(this._diskEncryptionEnabled),
      double_encryption_enabled: cdktf.booleanToTerraform(this._doubleEncryptionEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      outbound_network_access_restricted: cdktf.booleanToTerraform(this._outboundNetworkAccessRestricted),
      public_ip_type: cdktf.stringToTerraform(this._publicIpType),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      purge_enabled: cdktf.booleanToTerraform(this._purgeEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      streaming_ingestion_enabled: cdktf.booleanToTerraform(this._streamingIngestionEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trusted_external_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedExternalTenants),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      identity: kustoClusterIdentityToTerraform(this._identity.internalValue),
      language_extensions: cdktf.listMapper(kustoClusterLanguageExtensionsToTerraform, true)(this._languageExtensions.internalValue),
      optimized_auto_scale: kustoClusterOptimizedAutoScaleToTerraform(this._optimizedAutoScale.internalValue),
      sku: kustoClusterSkuToTerraform(this._sku.internalValue),
      timeouts: kustoClusterTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_network_configuration: kustoClusterVirtualNetworkConfigurationToTerraform(this._virtualNetworkConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_fqdns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedFqdns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_stop_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoStopEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._diskEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      double_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._doubleEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      outbound_network_access_restricted: {
        value: cdktf.booleanToHclTerraform(this._outboundNetworkAccessRestricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_ip_type: {
        value: cdktf.stringToHclTerraform(this._publicIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purge_enabled: {
        value: cdktf.booleanToHclTerraform(this._purgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming_ingestion_enabled: {
        value: cdktf.booleanToHclTerraform(this._streamingIngestionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trusted_external_tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustedExternalTenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      identity: {
        value: kustoClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoClusterIdentityList",
      },
      language_extensions: {
        value: cdktf.listMapperHcl(kustoClusterLanguageExtensionsToHclTerraform, true)(this._languageExtensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoClusterLanguageExtensionsList",
      },
      optimized_auto_scale: {
        value: kustoClusterOptimizedAutoScaleToHclTerraform(this._optimizedAutoScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoClusterOptimizedAutoScaleList",
      },
      sku: {
        value: kustoClusterSkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoClusterSkuList",
      },
      timeouts: {
        value: kustoClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KustoClusterTimeouts",
      },
      virtual_network_configuration: {
        value: kustoClusterVirtualNetworkConfigurationToHclTerraform(this._virtualNetworkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KustoClusterVirtualNetworkConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
