// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrbitalSpacecraftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}
  */
  readonly noradId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}
  */
  readonly titleLine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}
  */
  readonly twoLineElements: string[];
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}
  */
  readonly links: OrbitalSpacecraftLinks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}
  */
  readonly timeouts?: OrbitalSpacecraftTimeouts;
}
export interface OrbitalSpacecraftLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}
  */
  readonly bandwidthMhz: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}
  */
  readonly centerFrequencyMhz: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}
  */
  readonly polarization: string;
}

export function orbitalSpacecraftLinksToTerraform(struct?: OrbitalSpacecraftLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mhz: cdktf.numberToTerraform(struct!.bandwidthMhz),
    center_frequency_mhz: cdktf.numberToTerraform(struct!.centerFrequencyMhz),
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
    polarization: cdktf.stringToTerraform(struct!.polarization),
  }
}


export function orbitalSpacecraftLinksToHclTerraform(struct?: OrbitalSpacecraftLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_mhz: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    center_frequency_mhz: {
      value: cdktf.numberToHclTerraform(struct!.centerFrequencyMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
    polarization: {
      value: cdktf.stringToHclTerraform(struct!.polarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalSpacecraftLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrbitalSpacecraftLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMhz = this._bandwidthMhz;
    }
    if (this._centerFrequencyMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerFrequencyMhz = this._centerFrequencyMhz;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._polarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarization = this._polarization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalSpacecraftLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthMhz = undefined;
      this._centerFrequencyMhz = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._polarization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthMhz = value.bandwidthMhz;
      this._centerFrequencyMhz = value.centerFrequencyMhz;
      this._direction = value.direction;
      this._name = value.name;
      this._polarization = value.polarization;
    }
  }

  // bandwidth_mhz - computed: false, optional: false, required: true
  private _bandwidthMhz?: number; 
  public get bandwidthMhz() {
    return this.getNumberAttribute('bandwidth_mhz');
  }
  public set bandwidthMhz(value: number) {
    this._bandwidthMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMhzInput() {
    return this._bandwidthMhz;
  }

  // center_frequency_mhz - computed: false, optional: false, required: true
  private _centerFrequencyMhz?: number; 
  public get centerFrequencyMhz() {
    return this.getNumberAttribute('center_frequency_mhz');
  }
  public set centerFrequencyMhz(value: number) {
    this._centerFrequencyMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centerFrequencyMhzInput() {
    return this._centerFrequencyMhz;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // polarization - computed: false, optional: false, required: true
  private _polarization?: string; 
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
  public set polarization(value: string) {
    this._polarization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get polarizationInput() {
    return this._polarization;
  }
}

export class OrbitalSpacecraftLinksList extends cdktf.ComplexList {
  public internalValue? : OrbitalSpacecraftLinks[] | cdktf.IResolvable

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
  public get(index: number): OrbitalSpacecraftLinksOutputReference {
    return new OrbitalSpacecraftLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrbitalSpacecraftTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}
  */
  readonly update?: string;
}

export function orbitalSpacecraftTimeoutsToTerraform(struct?: OrbitalSpacecraftTimeouts | cdktf.IResolvable): any {
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


export function orbitalSpacecraftTimeoutsToHclTerraform(struct?: OrbitalSpacecraftTimeouts | cdktf.IResolvable): any {
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

export class OrbitalSpacecraftTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrbitalSpacecraftTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrbitalSpacecraftTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft}
*/
export class OrbitalSpacecraft extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_orbital_spacecraft";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrbitalSpacecraft to import
  * @param importFromId The id of the existing OrbitalSpacecraft that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrbitalSpacecraft to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_orbital_spacecraft", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrbitalSpacecraftConfig
  */
  public constructor(scope: Construct, id: string, config: OrbitalSpacecraftConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orbital_spacecraft',
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
    this._noradId = config.noradId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._titleLine = config.titleLine;
    this._twoLineElements = config.twoLineElements;
    this._links.internalValue = config.links;
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

  // norad_id - computed: false, optional: false, required: true
  private _noradId?: string; 
  public get noradId() {
    return this.getStringAttribute('norad_id');
  }
  public set noradId(value: string) {
    this._noradId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noradIdInput() {
    return this._noradId;
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

  // title_line - computed: false, optional: false, required: true
  private _titleLine?: string; 
  public get titleLine() {
    return this.getStringAttribute('title_line');
  }
  public set titleLine(value: string) {
    this._titleLine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleLineInput() {
    return this._titleLine;
  }

  // two_line_elements - computed: false, optional: false, required: true
  private _twoLineElements?: string[]; 
  public get twoLineElements() {
    return this.getListAttribute('two_line_elements');
  }
  public set twoLineElements(value: string[]) {
    this._twoLineElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoLineElementsInput() {
    return this._twoLineElements;
  }

  // links - computed: false, optional: false, required: true
  private _links = new OrbitalSpacecraftLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: OrbitalSpacecraftLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrbitalSpacecraftTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrbitalSpacecraftTimeouts) {
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
      norad_id: cdktf.stringToTerraform(this._noradId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title_line: cdktf.stringToTerraform(this._titleLine),
      two_line_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._twoLineElements),
      links: cdktf.listMapper(orbitalSpacecraftLinksToTerraform, true)(this._links.internalValue),
      timeouts: orbitalSpacecraftTimeoutsToTerraform(this._timeouts.internalValue),
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
      norad_id: {
        value: cdktf.stringToHclTerraform(this._noradId),
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
      title_line: {
        value: cdktf.stringToHclTerraform(this._titleLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_line_elements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._twoLineElements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      links: {
        value: cdktf.listMapperHcl(orbitalSpacecraftLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrbitalSpacecraftLinksList",
      },
      timeouts: {
        value: orbitalSpacecraftTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrbitalSpacecraftTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
