# `azurerm_sentinel_log_analytics_workspace_onboarding`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_log_analytics_workspace_onboarding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding).

# `sentinelLogAnalyticsWorkspaceOnboarding` Submodule <a name="`sentinelLogAnalyticsWorkspaceOnboarding` Submodule" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelLogAnalyticsWorkspaceOnboarding <a name="SentinelLogAnalyticsWorkspaceOnboarding" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding azurerm_sentinel_log_analytics_workspace_onboarding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  resource_group_name: str = None,
  timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeouts = None,
  workspace_id: str = None,
  workspace_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceName">workspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.customerManagedKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `workspace_name`<sup>Optional</sup> <a name="workspace_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled">reset_customer_managed_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName">reset_workspace_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}.

---

##### `reset_customer_managed_key_enabled` <a name="reset_customer_managed_key_enabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled"></a>

```python
def reset_customer_managed_key_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

##### `reset_workspace_name` <a name="reset_workspace_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName"></a>

```python
def reset_workspace_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput">customer_managed_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput">workspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName">workspace_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts"></a>

```python
timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a>

---

##### `customer_managed_key_enabled_input`<sup>Optional</sup> <a name="customer_managed_key_enabled_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput"></a>

```python
customer_managed_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SentinelLogAnalyticsWorkspaceOnboardingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>, cdktf.IResolvable]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_name_input`<sup>Optional</sup> <a name="workspace_name_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput"></a>

```python
workspace_name_input: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelLogAnalyticsWorkspaceOnboardingConfig <a name="SentinelLogAnalyticsWorkspaceOnboardingConfig" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_managed_key_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  resource_group_name: str = None,
  timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeouts = None,
  workspace_id: str = None,
  workspace_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName">workspace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts"></a>

```python
timeouts: SentinelLogAnalyticsWorkspaceOnboardingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `workspace_name`<sup>Optional</sup> <a name="workspace_name" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

### SentinelLogAnalyticsWorkspaceOnboardingTimeouts <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_log_analytics_workspace_onboarding

sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelLogAnalyticsWorkspaceOnboardingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>, cdktf.IResolvable]

---



