// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFunctionCollectorPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}
  */
  readonly trafficCollectorId: string;
  /**
  * ipfx_emission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}
  */
  readonly ipfxEmission: NetworkFunctionCollectorPolicyIpfxEmission;
  /**
  * ipfx_ingestion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}
  */
  readonly ipfxIngestion: NetworkFunctionCollectorPolicyIpfxIngestion;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}
  */
  readonly timeouts?: NetworkFunctionCollectorPolicyTimeouts;
}
export interface NetworkFunctionCollectorPolicyIpfxEmission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}
  */
  readonly destinationTypes: string[];
}

export function networkFunctionCollectorPolicyIpfxEmissionToTerraform(struct?: NetworkFunctionCollectorPolicyIpfxEmissionOutputReference | NetworkFunctionCollectorPolicyIpfxEmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationTypes),
  }
}


export function networkFunctionCollectorPolicyIpfxEmissionToHclTerraform(struct?: NetworkFunctionCollectorPolicyIpfxEmissionOutputReference | NetworkFunctionCollectorPolicyIpfxEmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFunctionCollectorPolicyIpfxEmissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFunctionCollectorPolicyIpfxEmission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTypes = this._destinationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFunctionCollectorPolicyIpfxEmission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationTypes = value.destinationTypes;
    }
  }

  // destination_types - computed: false, optional: false, required: true
  private _destinationTypes?: string[]; 
  public get destinationTypes() {
    return this.getListAttribute('destination_types');
  }
  public set destinationTypes(value: string[]) {
    this._destinationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypesInput() {
    return this._destinationTypes;
  }
}
export interface NetworkFunctionCollectorPolicyIpfxIngestion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}
  */
  readonly sourceResourceIds: string[];
}

export function networkFunctionCollectorPolicyIpfxIngestionToTerraform(struct?: NetworkFunctionCollectorPolicyIpfxIngestionOutputReference | NetworkFunctionCollectorPolicyIpfxIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceResourceIds),
  }
}


export function networkFunctionCollectorPolicyIpfxIngestionToHclTerraform(struct?: NetworkFunctionCollectorPolicyIpfxIngestionOutputReference | NetworkFunctionCollectorPolicyIpfxIngestion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceResourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFunctionCollectorPolicyIpfxIngestionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFunctionCollectorPolicyIpfxIngestion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceResourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceResourceIds = this._sourceResourceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFunctionCollectorPolicyIpfxIngestion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceResourceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceResourceIds = value.sourceResourceIds;
    }
  }

  // source_resource_ids - computed: false, optional: false, required: true
  private _sourceResourceIds?: string[]; 
  public get sourceResourceIds() {
    return this.getListAttribute('source_resource_ids');
  }
  public set sourceResourceIds(value: string[]) {
    this._sourceResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdsInput() {
    return this._sourceResourceIds;
  }
}
export interface NetworkFunctionCollectorPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}
  */
  readonly update?: string;
}

export function networkFunctionCollectorPolicyTimeoutsToTerraform(struct?: NetworkFunctionCollectorPolicyTimeouts | cdktf.IResolvable): any {
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


export function networkFunctionCollectorPolicyTimeoutsToHclTerraform(struct?: NetworkFunctionCollectorPolicyTimeouts | cdktf.IResolvable): any {
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

export class NetworkFunctionCollectorPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkFunctionCollectorPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkFunctionCollectorPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy}
*/
export class NetworkFunctionCollectorPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_function_collector_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFunctionCollectorPolicy to import
  * @param importFromId The id of the existing NetworkFunctionCollectorPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFunctionCollectorPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_function_collector_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFunctionCollectorPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFunctionCollectorPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_function_collector_policy',
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
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
    this._trafficCollectorId = config.trafficCollectorId;
    this._ipfxEmission.internalValue = config.ipfxEmission;
    this._ipfxIngestion.internalValue = config.ipfxIngestion;
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

  // traffic_collector_id - computed: false, optional: false, required: true
  private _trafficCollectorId?: string; 
  public get trafficCollectorId() {
    return this.getStringAttribute('traffic_collector_id');
  }
  public set trafficCollectorId(value: string) {
    this._trafficCollectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCollectorIdInput() {
    return this._trafficCollectorId;
  }

  // ipfx_emission - computed: false, optional: false, required: true
  private _ipfxEmission = new NetworkFunctionCollectorPolicyIpfxEmissionOutputReference(this, "ipfx_emission");
  public get ipfxEmission() {
    return this._ipfxEmission;
  }
  public putIpfxEmission(value: NetworkFunctionCollectorPolicyIpfxEmission) {
    this._ipfxEmission.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfxEmissionInput() {
    return this._ipfxEmission.internalValue;
  }

  // ipfx_ingestion - computed: false, optional: false, required: true
  private _ipfxIngestion = new NetworkFunctionCollectorPolicyIpfxIngestionOutputReference(this, "ipfx_ingestion");
  public get ipfxIngestion() {
    return this._ipfxIngestion;
  }
  public putIpfxIngestion(value: NetworkFunctionCollectorPolicyIpfxIngestion) {
    this._ipfxIngestion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfxIngestionInput() {
    return this._ipfxIngestion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkFunctionCollectorPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkFunctionCollectorPolicyTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_collector_id: cdktf.stringToTerraform(this._trafficCollectorId),
      ipfx_emission: networkFunctionCollectorPolicyIpfxEmissionToTerraform(this._ipfxEmission.internalValue),
      ipfx_ingestion: networkFunctionCollectorPolicyIpfxIngestionToTerraform(this._ipfxIngestion.internalValue),
      timeouts: networkFunctionCollectorPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      traffic_collector_id: {
        value: cdktf.stringToHclTerraform(this._trafficCollectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipfx_emission: {
        value: networkFunctionCollectorPolicyIpfxEmissionToHclTerraform(this._ipfxEmission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFunctionCollectorPolicyIpfxEmissionList",
      },
      ipfx_ingestion: {
        value: networkFunctionCollectorPolicyIpfxIngestionToHclTerraform(this._ipfxIngestion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFunctionCollectorPolicyIpfxIngestionList",
      },
      timeouts: {
        value: networkFunctionCollectorPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkFunctionCollectorPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
