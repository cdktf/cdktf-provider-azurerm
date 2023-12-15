# `appConfigurationFeature` Submodule <a name="`appConfigurationFeature` Submodule" id="@cdktf/provider-azurerm.appConfigurationFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppConfigurationFeature <a name="AppConfigurationFeature" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature azurerm_app_configuration_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeature(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_store_id: str,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  id: str = None,
  key: str = None,
  label: str = None,
  locked: typing.Union[bool, IResolvable] = None,
  percentage_filter_value: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  targeting_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]] = None,
  timeouts: AppConfigurationFeatureTimeouts = None,
  timewindow_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.percentageFilterValue">percentage_filter_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.targetingFilter">targeting_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]</code> | targeting_filter block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timewindowFilter">timewindow_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]</code> | timewindow_filter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.configurationStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.locked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}.

---

##### `percentage_filter_value`<sup>Optional</sup> <a name="percentage_filter_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.percentageFilterValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}.

---

##### `targeting_filter`<sup>Optional</sup> <a name="targeting_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.targetingFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]

targeting_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}

---

##### `timewindow_filter`<sup>Optional</sup> <a name="timewindow_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.timewindowFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]

timewindow_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter">put_targeting_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter">put_timewindow_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked">reset_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue">reset_percentage_filter_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter">reset_targeting_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter">reset_timewindow_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_targeting_filter` <a name="put_targeting_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter"></a>

```python
def put_targeting_filter(
  value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}.

---

##### `put_timewindow_filter` <a name="put_timewindow_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter"></a>

```python
def put_timewindow_filter(
  value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked"></a>

```python
def reset_locked() -> None
```

##### `reset_percentage_filter_value` <a name="reset_percentage_filter_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue"></a>

```python
def reset_percentage_filter_value() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_targeting_filter` <a name="reset_targeting_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter"></a>

```python
def reset_targeting_filter() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timewindow_filter` <a name="reset_timewindow_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter"></a>

```python
def reset_timewindow_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeature.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppConfigurationFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppConfigurationFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppConfigurationFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter">targeting_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter">timewindow_filter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput">configuration_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput">locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput">percentage_filter_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput">targeting_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput">timewindow_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue">percentage_filter_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `targeting_filter`<sup>Required</sup> <a name="targeting_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter"></a>

```python
targeting_filter: AppConfigurationFeatureTargetingFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts"></a>

```python
timeouts: AppConfigurationFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a>

---

##### `timewindow_filter`<sup>Required</sup> <a name="timewindow_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter"></a>

```python
timewindow_filter: AppConfigurationFeatureTimewindowFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a>

---

##### `configuration_store_id_input`<sup>Optional</sup> <a name="configuration_store_id_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput"></a>

```python
configuration_store_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput"></a>

```python
locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `percentage_filter_value_input`<sup>Optional</sup> <a name="percentage_filter_value_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput"></a>

```python
percentage_filter_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `targeting_filter_input`<sup>Optional</sup> <a name="targeting_filter_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput"></a>

```python
targeting_filter_input: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppConfigurationFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>]

---

##### `timewindow_filter_input`<sup>Optional</sup> <a name="timewindow_filter_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput"></a>

```python
timewindow_filter_input: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId"></a>

```python
configuration_store_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `percentage_filter_value`<sup>Required</sup> <a name="percentage_filter_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue"></a>

```python
percentage_filter_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppConfigurationFeatureConfig <a name="AppConfigurationFeatureConfig" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_store_id: str,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  id: str = None,
  key: str = None,
  label: str = None,
  locked: typing.Union[bool, IResolvable] = None,
  percentage_filter_value: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  targeting_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]] = None,
  timeouts: AppConfigurationFeatureTimeouts = None,
  timewindow_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId">configuration_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue">percentage_filter_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter">targeting_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]</code> | targeting_filter block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter">timewindow_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]</code> | timewindow_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_store_id`<sup>Required</sup> <a name="configuration_store_id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId"></a>

```python
configuration_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}.

---

##### `percentage_filter_value`<sup>Optional</sup> <a name="percentage_filter_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue"></a>

```python
percentage_filter_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}.

---

##### `targeting_filter`<sup>Optional</sup> <a name="targeting_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter"></a>

```python
targeting_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]

targeting_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts"></a>

```python
timeouts: AppConfigurationFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}

---

##### `timewindow_filter`<sup>Optional</sup> <a name="timewindow_filter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter"></a>

```python
timewindow_filter: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]

timewindow_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}

---

### AppConfigurationFeatureTargetingFilter <a name="AppConfigurationFeatureTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilter(
  default_rollout_percentage: typing.Union[int, float],
  groups: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilterGroups]] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage">default_rollout_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]</code> | groups block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}. |

---

##### `default_rollout_percentage`<sup>Required</sup> <a name="default_rollout_percentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage"></a>

```python
default_rollout_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups"></a>

```python
groups: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilterGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#groups AppConfigurationFeature#groups}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}.

---

### AppConfigurationFeatureTargetingFilterGroups <a name="AppConfigurationFeatureTargetingFilterGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups(
  name: str,
  rollout_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage">rollout_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `rollout_percentage`<sup>Required</sup> <a name="rollout_percentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage"></a>

```python
rollout_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}.

---

### AppConfigurationFeatureTimeouts <a name="AppConfigurationFeatureTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}.

---

### AppConfigurationFeatureTimewindowFilter <a name="AppConfigurationFeatureTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTimewindowFilter(
  end: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppConfigurationFeatureTargetingFilterGroupsList <a name="AppConfigurationFeatureTargetingFilterGroupsList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppConfigurationFeatureTargetingFilterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilterGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]

---


### AppConfigurationFeatureTargetingFilterGroupsOutputReference <a name="AppConfigurationFeatureTargetingFilterGroupsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput">rollout_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage">rollout_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rollout_percentage_input`<sup>Optional</sup> <a name="rollout_percentage_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput"></a>

```python
rollout_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rollout_percentage`<sup>Required</sup> <a name="rollout_percentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage"></a>

```python
rollout_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppConfigurationFeatureTargetingFilterGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]

---


### AppConfigurationFeatureTargetingFilterList <a name="AppConfigurationFeatureTargetingFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppConfigurationFeatureTargetingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]]

---


### AppConfigurationFeatureTargetingFilterOutputReference <a name="AppConfigurationFeatureTargetingFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_groups` <a name="put_groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups"></a>

```python
def put_groups(
  value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilterGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]

---

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput">default_rollout_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage">default_rollout_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups"></a>

```python
groups: AppConfigurationFeatureTargetingFilterGroupsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a>

---

##### `default_rollout_percentage_input`<sup>Optional</sup> <a name="default_rollout_percentage_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput"></a>

```python
default_rollout_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput"></a>

```python
groups_input: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTargetingFilterGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups">AppConfigurationFeatureTargetingFilterGroups</a>]]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_rollout_percentage`<sup>Required</sup> <a name="default_rollout_percentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage"></a>

```python
default_rollout_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppConfigurationFeatureTargetingFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter">AppConfigurationFeatureTargetingFilter</a>]

---


### AppConfigurationFeatureTimeoutsOutputReference <a name="AppConfigurationFeatureTimeoutsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppConfigurationFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>]

---


### AppConfigurationFeatureTimewindowFilterList <a name="AppConfigurationFeatureTimewindowFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppConfigurationFeatureTimewindowFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppConfigurationFeatureTimewindowFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]]

---


### AppConfigurationFeatureTimewindowFilterOutputReference <a name="AppConfigurationFeatureTimewindowFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_configuration_feature

appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end` <a name="reset_end" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppConfigurationFeatureTimewindowFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter">AppConfigurationFeatureTimewindowFilter</a>]

---



