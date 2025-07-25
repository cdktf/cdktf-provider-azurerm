# `applicationInsightsWorkbook` Submodule <a name="`applicationInsightsWorkbook` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWorkbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWorkbook <a name="ApplicationInsightsWorkbook" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook azurerm_application_insights_workbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  display_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  category: str = None,
  description: str = None,
  id: str = None,
  identity: ApplicationInsightsWorkbookIdentity = None,
  source_id: str = None,
  storage_container_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationInsightsWorkbookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.dataJson">data_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.dataJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#identity ApplicationInsightsWorkbook#identity}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.sourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}.

---

##### `storage_container_id`<sup>Optional</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.storageContainerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#timeouts ApplicationInsightsWorkbook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetStorageContainerId">reset_storage_container_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#type ApplicationInsightsWorkbook#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#identity_ids ApplicationInsightsWorkbook#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#create ApplicationInsightsWorkbook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#delete ApplicationInsightsWorkbook#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#read ApplicationInsightsWorkbook#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#update ApplicationInsightsWorkbook#update}.

---

##### `reset_category` <a name="reset_category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_storage_container_id` <a name="reset_storage_container_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetStorageContainerId"></a>

```python
def reset_storage_container_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationInsightsWorkbook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationInsightsWorkbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationInsightsWorkbook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationInsightsWorkbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWorkbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference">ApplicationInsightsWorkbookIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference">ApplicationInsightsWorkbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJsonInput">data_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerIdInput">storage_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identity"></a>

```python
identity: ApplicationInsightsWorkbookIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference">ApplicationInsightsWorkbookIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeouts"></a>

```python
timeouts: ApplicationInsightsWorkbookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference">ApplicationInsightsWorkbookTimeoutsOutputReference</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `data_json_input`<sup>Optional</sup> <a name="data_json_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJsonInput"></a>

```python
data_json_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.identityInput"></a>

```python
identity_input: ApplicationInsightsWorkbookIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `storage_container_id_input`<sup>Optional</sup> <a name="storage_container_id_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerIdInput"></a>

```python
storage_container_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationInsightsWorkbookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `storage_container_id`<sup>Required</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWorkbookConfig <a name="ApplicationInsightsWorkbookConfig" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  display_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  category: str = None,
  description: str = None,
  id: str = None,
  identity: ApplicationInsightsWorkbookIdentity = None,
  source_id: str = None,
  storage_container_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationInsightsWorkbookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dataJson">data_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.storageContainerId">storage_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#data_json ApplicationInsightsWorkbook#data_json}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#display_name ApplicationInsightsWorkbook#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#location ApplicationInsightsWorkbook#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#name ApplicationInsightsWorkbook#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#resource_group_name ApplicationInsightsWorkbook#resource_group_name}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#category ApplicationInsightsWorkbook#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#description ApplicationInsightsWorkbook#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#id ApplicationInsightsWorkbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.identity"></a>

```python
identity: ApplicationInsightsWorkbookIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#identity ApplicationInsightsWorkbook#identity}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#source_id ApplicationInsightsWorkbook#source_id}.

---

##### `storage_container_id`<sup>Optional</sup> <a name="storage_container_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.storageContainerId"></a>

```python
storage_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#storage_container_id ApplicationInsightsWorkbook#storage_container_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#tags ApplicationInsightsWorkbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookConfig.property.timeouts"></a>

```python
timeouts: ApplicationInsightsWorkbookTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#timeouts ApplicationInsightsWorkbook#timeouts}

---

### ApplicationInsightsWorkbookIdentity <a name="ApplicationInsightsWorkbookIdentity" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#type ApplicationInsightsWorkbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#identity_ids ApplicationInsightsWorkbook#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#type ApplicationInsightsWorkbook#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#identity_ids ApplicationInsightsWorkbook#identity_ids}.

---

### ApplicationInsightsWorkbookTimeouts <a name="ApplicationInsightsWorkbookTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#create ApplicationInsightsWorkbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#delete ApplicationInsightsWorkbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#read ApplicationInsightsWorkbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#update ApplicationInsightsWorkbook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#create ApplicationInsightsWorkbook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#delete ApplicationInsightsWorkbook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#read ApplicationInsightsWorkbook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/application_insights_workbook#update ApplicationInsightsWorkbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWorkbookIdentityOutputReference <a name="ApplicationInsightsWorkbookIdentityOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationInsightsWorkbookIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookIdentity">ApplicationInsightsWorkbookIdentity</a>

---


### ApplicationInsightsWorkbookTimeoutsOutputReference <a name="ApplicationInsightsWorkbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_workbook

applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationInsightsWorkbookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWorkbook.ApplicationInsightsWorkbookTimeouts">ApplicationInsightsWorkbookTimeouts</a>]

---



