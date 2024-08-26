# `resourceGroupCostManagementExport` Submodule <a name="`resourceGroupCostManagementExport` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementExport <a name="ResourceGroupCostManagementExport" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export azurerm_resource_group_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_data_options: ResourceGroupCostManagementExportExportDataOptions,
  export_data_storage_location: ResourceGroupCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  resource_group_id: str,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: ResourceGroupCostManagementExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions">put_export_data_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation">put_export_data_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_export_data_options` <a name="put_export_data_options" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions"></a>

```python
def put_export_data_options(
  time_frame: str,
  type: str
) -> None
```

###### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions.parameter.timeFrame"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}.

---

##### `put_export_data_storage_location` <a name="put_export_data_storage_location" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation"></a>

```python
def put_export_data_storage_location(
  container_id: str,
  root_folder_path: str
) -> None
```

###### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation.parameter.containerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}.

---

###### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation.parameter.rootFolderPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceGroupCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceGroupCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceGroupCostManagementExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceGroupCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceGroupCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput">export_data_options_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput">export_data_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput">recurrence_period_end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput">recurrence_period_start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions"></a>

```python
export_data_options: ResourceGroupCostManagementExportExportDataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a>

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: ResourceGroupCostManagementExportExportDataStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts"></a>

```python
timeouts: ResourceGroupCostManagementExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_data_options_input`<sup>Optional</sup> <a name="export_data_options_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput"></a>

```python
export_data_options_input: ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `export_data_storage_location_input`<sup>Optional</sup> <a name="export_data_storage_location_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput"></a>

```python
export_data_storage_location_input: ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_period_end_date_input`<sup>Optional</sup> <a name="recurrence_period_end_date_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```python
recurrence_period_end_date_input: str
```

- *Type:* str

---

##### `recurrence_period_start_date_input`<sup>Optional</sup> <a name="recurrence_period_start_date_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```python
recurrence_period_start_date_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceGroupCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementExportConfig <a name="ResourceGroupCostManagementExportConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_data_options: ResourceGroupCostManagementExportExportDataOptions,
  export_data_storage_location: ResourceGroupCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  resource_group_id: str,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: ResourceGroupCostManagementExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions"></a>

```python
export_data_options: ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts"></a>

```python
timeouts: ResourceGroupCostManagementExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

### ResourceGroupCostManagementExportExportDataOptions <a name="ResourceGroupCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions(
  time_frame: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame">time_frame</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}. |

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}.

---

### ResourceGroupCostManagementExportExportDataStorageLocation <a name="ResourceGroupCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation(
  container_id: str,
  root_folder_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}. |

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}.

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}.

---

### ResourceGroupCostManagementExportTimeouts <a name="ResourceGroupCostManagementExportTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementExportExportDataOptionsOutputReference <a name="ResourceGroupCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">time_frame_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame">time_frame</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_frame_input`<sup>Optional</sup> <a name="time_frame_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```python
time_frame_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---


### ResourceGroupCostManagementExportExportDataStorageLocationOutputReference <a name="ResourceGroupCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">root_folder_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `root_folder_path_input`<sup>Optional</sup> <a name="root_folder_path_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```python
root_folder_path_input: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---


### ResourceGroupCostManagementExportTimeoutsOutputReference <a name="ResourceGroupCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_export

resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>]

---



