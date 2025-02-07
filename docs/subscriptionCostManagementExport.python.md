# `subscriptionCostManagementExport` Submodule <a name="`subscriptionCostManagementExport` Submodule" id="@cdktf/provider-azurerm.subscriptionCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementExport <a name="SubscriptionCostManagementExport" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export azurerm_subscription_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_data_options: SubscriptionCostManagementExportExportDataOptions,
  export_data_storage_location: SubscriptionCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  subscription_id: str,
  active: typing.Union[bool, IResolvable] = None,
  file_format: str = None,
  id: str = None,
  timeouts: SubscriptionCostManagementExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#file_format SubscriptionCostManagementExport#file_format}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.fileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#file_format SubscriptionCostManagementExport#file_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions">put_export_data_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation">put_export_data_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_export_data_options` <a name="put_export_data_options" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions"></a>

```python
def put_export_data_options(
  time_frame: str,
  type: str
) -> None
```

###### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions.parameter.timeFrame"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}.

---

##### `put_export_data_storage_location` <a name="put_export_data_storage_location" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation"></a>

```python
def put_export_data_storage_location(
  container_id: str,
  root_folder_path: str
) -> None
```

###### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation.parameter.containerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}.

---

###### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation.parameter.rootFolderPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_file_format` <a name="reset_file_format" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SubscriptionCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SubscriptionCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SubscriptionCostManagementExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SubscriptionCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput">export_data_options_input</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput">export_data_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput">recurrence_period_end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput">recurrence_period_start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions"></a>

```python
export_data_options: SubscriptionCostManagementExportExportDataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a>

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: SubscriptionCostManagementExportExportDataStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts"></a>

```python
timeouts: SubscriptionCostManagementExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_data_options_input`<sup>Optional</sup> <a name="export_data_options_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput"></a>

```python
export_data_options_input: SubscriptionCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `export_data_storage_location_input`<sup>Optional</sup> <a name="export_data_storage_location_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput"></a>

```python
export_data_storage_location_input: SubscriptionCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_period_end_date_input`<sup>Optional</sup> <a name="recurrence_period_end_date_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```python
recurrence_period_end_date_input: str
```

- *Type:* str

---

##### `recurrence_period_start_date_input`<sup>Optional</sup> <a name="recurrence_period_start_date_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```python
recurrence_period_start_date_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SubscriptionCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementExportConfig <a name="SubscriptionCostManagementExportConfig" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_data_options: SubscriptionCostManagementExportExportDataOptions,
  export_data_storage_location: SubscriptionCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  subscription_id: str,
  active: typing.Union[bool, IResolvable] = None,
  file_format: str = None,
  id: str = None,
  timeouts: SubscriptionCostManagementExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#file_format SubscriptionCostManagementExport#file_format}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions"></a>

```python
export_data_options: SubscriptionCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: SubscriptionCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#file_format SubscriptionCostManagementExport#file_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts"></a>

```python
timeouts: SubscriptionCostManagementExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

### SubscriptionCostManagementExportExportDataOptions <a name="SubscriptionCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions(
  time_frame: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame">time_frame</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}. |

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}.

---

### SubscriptionCostManagementExportExportDataStorageLocation <a name="SubscriptionCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation(
  container_id: str,
  root_folder_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}. |

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}.

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}.

---

### SubscriptionCostManagementExportTimeouts <a name="SubscriptionCostManagementExportTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementExportExportDataOptionsOutputReference <a name="SubscriptionCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">time_frame_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame">time_frame</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_frame_input`<sup>Optional</sup> <a name="time_frame_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```python
time_frame_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SubscriptionCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---


### SubscriptionCostManagementExportExportDataStorageLocationOutputReference <a name="SubscriptionCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">root_folder_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `root_folder_path_input`<sup>Optional</sup> <a name="root_folder_path_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```python
root_folder_path_input: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: SubscriptionCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---


### SubscriptionCostManagementExportTimeoutsOutputReference <a name="SubscriptionCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_export

subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>]

---



