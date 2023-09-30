# `azurerm_subscription_cost_management_view`

Refer to the Terraform Registory for docs: [`azurerm_subscription_cost_management_view`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view).

# `subscriptionCostManagementView` Submodule <a name="`subscriptionCostManagementView` Submodule" id="@cdktf/provider-azurerm.subscriptionCostManagementView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementView <a name="SubscriptionCostManagementView" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view azurerm_subscription_cost_management_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementView(
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
  dataset: SubscriptionCostManagementViewDataset,
  display_name: str,
  name: str,
  report_type: str,
  subscription_id: str,
  timeframe: str,
  id: str = None,
  kpi: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]] = None,
  pivot: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]] = None,
  timeouts: SubscriptionCostManagementViewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.chartType">chart_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.reportType">report_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeframe">timeframe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.kpi">kpi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]</code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.pivot">pivot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]</code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.accumulated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}.

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.chartType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#dataset SubscriptionCostManagementView#dataset}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.reportType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeframe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.kpi"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#kpi SubscriptionCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.pivot"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#pivot SubscriptionCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeouts SubscriptionCostManagementView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset">put_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi">put_kpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot">put_pivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetKpi">reset_kpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetPivot">reset_pivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset"></a>

```python
def put_dataset(
  aggregation: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]],
  granularity: str,
  grouping: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]] = None,
  sorting: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]] = None
) -> None
```

###### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset.parameter.aggregation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#aggregation SubscriptionCostManagementView#aggregation}

---

###### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset.parameter.granularity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}.

---

###### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset.parameter.grouping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#grouping SubscriptionCostManagementView#grouping}

---

###### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset.parameter.sorting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#sorting SubscriptionCostManagementView#sorting}

---

##### `put_kpi` <a name="put_kpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi"></a>

```python
def put_kpi(
  value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]

---

##### `put_pivot` <a name="put_pivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot"></a>

```python
def put_pivot(
  value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kpi` <a name="reset_kpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetKpi"></a>

```python
def reset_kpi() -> None
```

##### `reset_pivot` <a name="reset_pivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetPivot"></a>

```python
def reset_pivot() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference">SubscriptionCostManagementViewDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpi">kpi</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList">SubscriptionCostManagementViewKpiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivot">pivot</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList">SubscriptionCostManagementViewPivotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference">SubscriptionCostManagementViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulatedInput">accumulated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartTypeInput">chart_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpiInput">kpi_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivotInput">pivot_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportTypeInput">report_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframeInput">timeframe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartType">chart_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportType">report_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframe">timeframe</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dataset"></a>

```python
dataset: SubscriptionCostManagementViewDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference">SubscriptionCostManagementViewDatasetOutputReference</a>

---

##### `kpi`<sup>Required</sup> <a name="kpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpi"></a>

```python
kpi: SubscriptionCostManagementViewKpiList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList">SubscriptionCostManagementViewKpiList</a>

---

##### `pivot`<sup>Required</sup> <a name="pivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivot"></a>

```python
pivot: SubscriptionCostManagementViewPivotList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList">SubscriptionCostManagementViewPivotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeouts"></a>

```python
timeouts: SubscriptionCostManagementViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference">SubscriptionCostManagementViewTimeoutsOutputReference</a>

---

##### `accumulated_input`<sup>Optional</sup> <a name="accumulated_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulatedInput"></a>

```python
accumulated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_type_input`<sup>Optional</sup> <a name="chart_type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartTypeInput"></a>

```python
chart_type_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.datasetInput"></a>

```python
dataset_input: SubscriptionCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kpi_input`<sup>Optional</sup> <a name="kpi_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpiInput"></a>

```python
kpi_input: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pivot_input`<sup>Optional</sup> <a name="pivot_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivotInput"></a>

```python
pivot_input: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]

---

##### `report_type_input`<sup>Optional</sup> <a name="report_type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportTypeInput"></a>

```python
report_type_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeframe_input`<sup>Optional</sup> <a name="timeframe_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframeInput"></a>

```python
timeframe_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SubscriptionCostManagementViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulated"></a>

```python
accumulated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartType"></a>

```python
chart_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementViewConfig <a name="SubscriptionCostManagementViewConfig" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accumulated: typing.Union[bool, IResolvable],
  chart_type: str,
  dataset: SubscriptionCostManagementViewDataset,
  display_name: str,
  name: str,
  report_type: str,
  subscription_id: str,
  timeframe: str,
  id: str = None,
  kpi: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]] = None,
  pivot: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]] = None,
  timeouts: SubscriptionCostManagementViewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.accumulated">accumulated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.chartType">chart_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.reportType">report_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeframe">timeframe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.kpi">kpi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]</code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.pivot">pivot</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]</code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.accumulated"></a>

```python
accumulated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}.

---

##### `chart_type`<sup>Required</sup> <a name="chart_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.chartType"></a>

```python
chart_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dataset"></a>

```python
dataset: SubscriptionCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#dataset SubscriptionCostManagementView#dataset}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeframe"></a>

```python
timeframe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.kpi"></a>

```python
kpi: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#kpi SubscriptionCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.pivot"></a>

```python
pivot: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#pivot SubscriptionCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeouts"></a>

```python
timeouts: SubscriptionCostManagementViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#timeouts SubscriptionCostManagementView#timeouts}

---

### SubscriptionCostManagementViewDataset <a name="SubscriptionCostManagementViewDataset" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDataset(
  aggregation: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]],
  granularity: str,
  grouping: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]] = None,
  sorting: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.aggregation">aggregation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]</code> | aggregation block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.granularity">granularity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.grouping">grouping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]</code> | grouping block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.sorting">sorting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]</code> | sorting block. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.aggregation"></a>

```python
aggregation: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#aggregation SubscriptionCostManagementView#aggregation}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}.

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.grouping"></a>

```python
grouping: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#grouping SubscriptionCostManagementView#grouping}

---

##### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.sorting"></a>

```python
sorting: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#sorting SubscriptionCostManagementView#sorting}

---

### SubscriptionCostManagementViewDatasetAggregation <a name="SubscriptionCostManagementViewDatasetAggregation" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation(
  column_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#column_name SubscriptionCostManagementView#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#column_name SubscriptionCostManagementView#column_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

### SubscriptionCostManagementViewDatasetGrouping <a name="SubscriptionCostManagementViewDatasetGrouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewDatasetSorting <a name="SubscriptionCostManagementViewDatasetSorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting(
  direction: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#direction SubscriptionCostManagementView#direction}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#direction SubscriptionCostManagementView#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

### SubscriptionCostManagementViewKpi <a name="SubscriptionCostManagementViewKpi" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewKpi(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewPivot <a name="SubscriptionCostManagementViewPivot" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewPivot(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewTimeouts <a name="SubscriptionCostManagementViewTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementViewDatasetAggregationList <a name="SubscriptionCostManagementViewDatasetAggregationList" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubscriptionCostManagementViewDatasetAggregationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]

---


### SubscriptionCostManagementViewDatasetAggregationOutputReference <a name="SubscriptionCostManagementViewDatasetAggregationOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewDatasetAggregation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]

---


### SubscriptionCostManagementViewDatasetGroupingList <a name="SubscriptionCostManagementViewDatasetGroupingList" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubscriptionCostManagementViewDatasetGroupingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]

---


### SubscriptionCostManagementViewDatasetGroupingOutputReference <a name="SubscriptionCostManagementViewDatasetGroupingOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewDatasetGrouping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]

---


### SubscriptionCostManagementViewDatasetOutputReference <a name="SubscriptionCostManagementViewDatasetOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation">put_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping">put_grouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting">put_sorting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetGrouping">reset_grouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetSorting">reset_sorting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregation` <a name="put_aggregation" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation"></a>

```python
def put_aggregation(
  value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]

---

##### `put_grouping` <a name="put_grouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping"></a>

```python
def put_grouping(
  value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]

---

##### `put_sorting` <a name="put_sorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting"></a>

```python
def put_sorting(
  value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]

---

##### `reset_grouping` <a name="reset_grouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetGrouping"></a>

```python
def reset_grouping() -> None
```

##### `reset_sorting` <a name="reset_sorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetSorting"></a>

```python
def reset_sorting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList">SubscriptionCostManagementViewDatasetAggregationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList">SubscriptionCostManagementViewDatasetGroupingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sorting">sorting</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList">SubscriptionCostManagementViewDatasetSortingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.groupingInput">grouping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sortingInput">sorting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregation"></a>

```python
aggregation: SubscriptionCostManagementViewDatasetAggregationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList">SubscriptionCostManagementViewDatasetAggregationList</a>

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.grouping"></a>

```python
grouping: SubscriptionCostManagementViewDatasetGroupingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList">SubscriptionCostManagementViewDatasetGroupingList</a>

---

##### `sorting`<sup>Required</sup> <a name="sorting" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sorting"></a>

```python
sorting: SubscriptionCostManagementViewDatasetSortingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList">SubscriptionCostManagementViewDatasetSortingList</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregationInput"></a>

```python
aggregation_input: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetAggregation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>]]

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `grouping_input`<sup>Optional</sup> <a name="grouping_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.groupingInput"></a>

```python
grouping_input: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetGrouping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>]]

---

##### `sorting_input`<sup>Optional</sup> <a name="sorting_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sortingInput"></a>

```python
sorting_input: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.internalValue"></a>

```python
internal_value: SubscriptionCostManagementViewDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

---


### SubscriptionCostManagementViewDatasetSortingList <a name="SubscriptionCostManagementViewDatasetSortingList" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubscriptionCostManagementViewDatasetSortingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewDatasetSorting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]]

---


### SubscriptionCostManagementViewDatasetSortingOutputReference <a name="SubscriptionCostManagementViewDatasetSortingOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewDatasetSorting]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>]

---


### SubscriptionCostManagementViewKpiList <a name="SubscriptionCostManagementViewKpiList" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewKpiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubscriptionCostManagementViewKpiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewKpi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]]

---


### SubscriptionCostManagementViewKpiOutputReference <a name="SubscriptionCostManagementViewKpiOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewKpi]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>]

---


### SubscriptionCostManagementViewPivotList <a name="SubscriptionCostManagementViewPivotList" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewPivotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubscriptionCostManagementViewPivotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubscriptionCostManagementViewPivot]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]]

---


### SubscriptionCostManagementViewPivotOutputReference <a name="SubscriptionCostManagementViewPivotOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewPivot]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>]

---


### SubscriptionCostManagementViewTimeoutsOutputReference <a name="SubscriptionCostManagementViewTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subscription_cost_management_view

subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubscriptionCostManagementViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>]

---



