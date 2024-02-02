# `billingAccountCostManagementExport` Submodule <a name="`billingAccountCostManagementExport` Submodule" id="@cdktf/provider-azurerm.billingAccountCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingAccountCostManagementExport <a name="BillingAccountCostManagementExport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account_id: str,
  export_data_options: BillingAccountCostManagementExportExportDataOptions,
  export_data_storage_location: BillingAccountCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: BillingAccountCostManagementExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.billingAccountId">billing_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.billingAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions">put_export_data_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation">put_export_data_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_export_data_options` <a name="put_export_data_options" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions"></a>

```python
def put_export_data_options(
  time_frame: str,
  type: str
) -> None
```

###### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions.parameter.timeFrame"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}.

---

##### `put_export_data_storage_location` <a name="put_export_data_storage_location" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation"></a>

```python
def put_export_data_storage_location(
  container_id: str,
  root_folder_path: str
) -> None
```

###### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation.parameter.containerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}.

---

###### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation.parameter.rootFolderPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingAccountCostManagementExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingAccountCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BillingAccountCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput">billing_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput">export_data_options_input</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput">export_data_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput">recurrence_period_end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput">recurrence_period_start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId">billing_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions"></a>

```python
export_data_options: BillingAccountCostManagementExportExportDataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a>

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: BillingAccountCostManagementExportExportDataStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts"></a>

```python
timeouts: BillingAccountCostManagementExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_account_id_input`<sup>Optional</sup> <a name="billing_account_id_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput"></a>

```python
billing_account_id_input: str
```

- *Type:* str

---

##### `export_data_options_input`<sup>Optional</sup> <a name="export_data_options_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput"></a>

```python
export_data_options_input: BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `export_data_storage_location_input`<sup>Optional</sup> <a name="export_data_storage_location_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput"></a>

```python
export_data_storage_location_input: BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recurrence_period_end_date_input`<sup>Optional</sup> <a name="recurrence_period_end_date_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```python
recurrence_period_end_date_input: str
```

- *Type:* str

---

##### `recurrence_period_start_date_input`<sup>Optional</sup> <a name="recurrence_period_start_date_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```python
recurrence_period_start_date_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BillingAccountCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId"></a>

```python
billing_account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingAccountCostManagementExportConfig <a name="BillingAccountCostManagementExportConfig" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account_id: str,
  export_data_options: BillingAccountCostManagementExportExportDataOptions,
  export_data_storage_location: BillingAccountCostManagementExportExportDataStorageLocation,
  name: str,
  recurrence_period_end_date: str,
  recurrence_period_start_date: str,
  recurrence_type: str,
  active: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: BillingAccountCostManagementExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId">billing_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions">export_data_options</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation">export_data_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate">recurrence_period_end_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate">recurrence_period_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account_id`<sup>Required</sup> <a name="billing_account_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId"></a>

```python
billing_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `export_data_options`<sup>Required</sup> <a name="export_data_options" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions"></a>

```python
export_data_options: BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `export_data_storage_location`<sup>Required</sup> <a name="export_data_storage_location" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation"></a>

```python
export_data_storage_location: BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `recurrence_period_end_date`<sup>Required</sup> <a name="recurrence_period_end_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```python
recurrence_period_end_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `recurrence_period_start_date`<sup>Required</sup> <a name="recurrence_period_start_date" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```python
recurrence_period_start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts"></a>

```python
timeouts: BillingAccountCostManagementExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

### BillingAccountCostManagementExportExportDataOptions <a name="BillingAccountCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions(
  time_frame: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame">time_frame</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}. |

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}.

---

### BillingAccountCostManagementExportExportDataStorageLocation <a name="BillingAccountCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation(
  container_id: str,
  root_folder_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}. |

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}.

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}.

---

### BillingAccountCostManagementExportTimeouts <a name="BillingAccountCostManagementExportTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingAccountCostManagementExportExportDataOptionsOutputReference <a name="BillingAccountCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">time_frame_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame">time_frame</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_frame_input`<sup>Optional</sup> <a name="time_frame_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```python
time_frame_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `time_frame`<sup>Required</sup> <a name="time_frame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```python
time_frame: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---


### BillingAccountCostManagementExportExportDataStorageLocationOutputReference <a name="BillingAccountCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">root_folder_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">root_folder_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `root_folder_path_input`<sup>Optional</sup> <a name="root_folder_path_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```python
root_folder_path_input: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `root_folder_path`<sup>Required</sup> <a name="root_folder_path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```python
root_folder_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---


### BillingAccountCostManagementExportTimeoutsOutputReference <a name="BillingAccountCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import billing_account_cost_management_export

billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BillingAccountCostManagementExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>]

---



