# `resourceGroupCostManagementView` Submodule <a name="`resourceGroupCostManagementView` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementView <a name="ResourceGroupCostManagementView" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view azurerm_resource_group_cost_management_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementView(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accumulated: typing.Union[bool, IResolvable],
  chart_type: str,
  dataset: ResourceGroupCostManagementViewDataset,
  display_name: str,
  name: str,
  report_type: str,
  resource_group_id: str,
  timeframe: str,
  id: str = None,
  kpi: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]] = None,
  pivot: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]] = None,
  timeouts: ResourceGroupCostManagementViewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.chartType">chart_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.reportType">report_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeframe">timeframe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.kpi">kpi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]</code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.pivot">pivot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]</code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.accumulated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}.

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.chartType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.reportType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeframe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.kpi"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.pivot"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset">put_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi">put_kpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot">put_pivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi">reset_kpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot">reset_pivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset"></a>

```python
def put_dataset(
  aggregation: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]],
  granularity: str,
  grouping: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]] = None,
  sorting: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]] = None
) -> None
```

###### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.aggregation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#aggregation ResourceGroupCostManagementView#aggregation}

---

###### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.granularity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}.

---

###### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.grouping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#grouping ResourceGroupCostManagementView#grouping}

---

###### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.sorting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#sorting ResourceGroupCostManagementView#sorting}

---

##### `put_kpi` <a name="put_kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi"></a>

```python
def put_kpi(
  value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]

---

##### `put_pivot` <a name="put_pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot"></a>

```python
def put_pivot(
  value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kpi` <a name="reset_kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi"></a>

```python
def reset_kpi() -> None
```

##### `reset_pivot` <a name="reset_pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot"></a>

```python
def reset_pivot() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceGroupCostManagementView resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceGroupCostManagementView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceGroupCostManagementView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceGroupCostManagementView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceGroupCostManagementView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi">kpi</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot">pivot</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput">accumulated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput">chart_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput">kpi_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput">pivot_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput">report_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput">timeframe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType">chart_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType">report_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe">timeframe</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset"></a>

```python
dataset: ResourceGroupCostManagementViewDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a>

---

##### `kpi`<sup>Required</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi"></a>

```python
kpi: ResourceGroupCostManagementViewKpiList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a>

---

##### `pivot`<sup>Required</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot"></a>

```python
pivot: ResourceGroupCostManagementViewPivotList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts"></a>

```python
timeouts: ResourceGroupCostManagementViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a>

---

##### `accumulated_input`<sup>Optional</sup> <a name="accumulated_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput"></a>

```python
accumulated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_type_input`<sup>Optional</sup> <a name="chart_type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput"></a>

```python
chart_type_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput"></a>

```python
dataset_input: ResourceGroupCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kpi_input`<sup>Optional</sup> <a name="kpi_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput"></a>

```python
kpi_input: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pivot_input`<sup>Optional</sup> <a name="pivot_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput"></a>

```python
pivot_input: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]

---

##### `report_type_input`<sup>Optional</sup> <a name="report_type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput"></a>

```python
report_type_input: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeframe_input`<sup>Optional</sup> <a name="timeframe_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput"></a>

```python
timeframe_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceGroupCostManagementViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated"></a>

```python
accumulated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType"></a>

```python
chart_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementViewConfig <a name="ResourceGroupCostManagementViewConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accumulated: typing.Union[bool, IResolvable],
  chart_type: str,
  dataset: ResourceGroupCostManagementViewDataset,
  display_name: str,
  name: str,
  report_type: str,
  resource_group_id: str,
  timeframe: str,
  id: str = None,
  kpi: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]] = None,
  pivot: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]] = None,
  timeouts: ResourceGroupCostManagementViewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType">chart_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType">report_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe">timeframe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi">kpi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]</code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot">pivot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]</code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated"></a>

```python
accumulated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}.

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType"></a>

```python
chart_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset"></a>

```python
dataset: ResourceGroupCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi"></a>

```python
kpi: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot"></a>

```python
pivot: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts"></a>

```python
timeouts: ResourceGroupCostManagementViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}

---

### ResourceGroupCostManagementViewDataset <a name="ResourceGroupCostManagementViewDataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset(
  aggregation: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]],
  granularity: str,
  grouping: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]] = None,
  sorting: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation">aggregation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]</code> | aggregation block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity">granularity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping">grouping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]</code> | grouping block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting">sorting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]</code> | sorting block. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation"></a>

```python
aggregation: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#aggregation ResourceGroupCostManagementView#aggregation}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}.

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping"></a>

```python
grouping: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#grouping ResourceGroupCostManagementView#grouping}

---

##### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting"></a>

```python
sorting: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#sorting ResourceGroupCostManagementView#sorting}

---

### ResourceGroupCostManagementViewDatasetAggregation <a name="ResourceGroupCostManagementViewDatasetAggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation(
  column_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewDatasetGrouping <a name="ResourceGroupCostManagementViewDatasetGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewDatasetSorting <a name="ResourceGroupCostManagementViewDatasetSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting(
  direction: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewKpi <a name="ResourceGroupCostManagementViewKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewPivot <a name="ResourceGroupCostManagementViewPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewTimeouts <a name="ResourceGroupCostManagementViewTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementViewDatasetAggregationList <a name="ResourceGroupCostManagementViewDatasetAggregationList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceGroupCostManagementViewDatasetAggregationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]

---


### ResourceGroupCostManagementViewDatasetAggregationOutputReference <a name="ResourceGroupCostManagementViewDatasetAggregationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewDatasetAggregation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]

---


### ResourceGroupCostManagementViewDatasetGroupingList <a name="ResourceGroupCostManagementViewDatasetGroupingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceGroupCostManagementViewDatasetGroupingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]

---


### ResourceGroupCostManagementViewDatasetGroupingOutputReference <a name="ResourceGroupCostManagementViewDatasetGroupingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewDatasetGrouping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]

---


### ResourceGroupCostManagementViewDatasetOutputReference <a name="ResourceGroupCostManagementViewDatasetOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation">put_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping">put_grouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting">put_sorting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping">reset_grouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting">reset_sorting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregation` <a name="put_aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation"></a>

```python
def put_aggregation(
  value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]

---

##### `put_grouping` <a name="put_grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping"></a>

```python
def put_grouping(
  value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]

---

##### `put_sorting` <a name="put_sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting"></a>

```python
def put_sorting(
  value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]

---

##### `reset_grouping` <a name="reset_grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping"></a>

```python
def reset_grouping() -> None
```

##### `reset_sorting` <a name="reset_sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting"></a>

```python
def reset_sorting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting">sorting</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput">grouping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput">sorting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation"></a>

```python
aggregation: ResourceGroupCostManagementViewDatasetAggregationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a>

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping"></a>

```python
grouping: ResourceGroupCostManagementViewDatasetGroupingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a>

---

##### `sorting`<sup>Required</sup> <a name="sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting"></a>

```python
sorting: ResourceGroupCostManagementViewDatasetSortingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput"></a>

```python
aggregation_input: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>]]

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `grouping_input`<sup>Optional</sup> <a name="grouping_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput"></a>

```python
grouping_input: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>]]

---

##### `sorting_input`<sup>Optional</sup> <a name="sorting_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput"></a>

```python
sorting_input: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue"></a>

```python
internal_value: ResourceGroupCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---


### ResourceGroupCostManagementViewDatasetSortingList <a name="ResourceGroupCostManagementViewDatasetSortingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceGroupCostManagementViewDatasetSortingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]]

---


### ResourceGroupCostManagementViewDatasetSortingOutputReference <a name="ResourceGroupCostManagementViewDatasetSortingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewDatasetSorting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>]

---


### ResourceGroupCostManagementViewKpiList <a name="ResourceGroupCostManagementViewKpiList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceGroupCostManagementViewKpiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]]

---


### ResourceGroupCostManagementViewKpiOutputReference <a name="ResourceGroupCostManagementViewKpiOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewKpi]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>]

---


### ResourceGroupCostManagementViewPivotList <a name="ResourceGroupCostManagementViewPivotList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceGroupCostManagementViewPivotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceGroupCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]]

---


### ResourceGroupCostManagementViewPivotOutputReference <a name="ResourceGroupCostManagementViewPivotOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewPivot]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>]

---


### ResourceGroupCostManagementViewTimeoutsOutputReference <a name="ResourceGroupCostManagementViewTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_group_cost_management_view

resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceGroupCostManagementViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>]

---



