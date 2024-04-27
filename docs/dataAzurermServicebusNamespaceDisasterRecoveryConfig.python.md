# `dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alias_authorization_rule_id: str = None,
  id: str = None,
  namespace_id: str = None,
  namespace_name: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.aliasAuthorizationRuleId">alias_authorization_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `alias_authorization_rule_id`<sup>Optional</sup> <a name="alias_authorization_rule_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.aliasAuthorizationRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">reset_alias_authorization_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName">reset_namespace_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}.

---

##### `reset_alias_authorization_rule_id` <a name="reset_alias_authorization_rule_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```python
def reset_alias_authorization_rule_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_namespace_name` <a name="reset_namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName"></a>

```python
def reset_namespace_name() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermServicebusNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">default_primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">default_secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">partner_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">primary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">secondary_connection_string_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">alias_authorization_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">alias_authorization_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_primary_key`<sup>Required</sup> <a name="default_primary_key" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```python
default_primary_key: str
```

- *Type:* str

---

##### `default_secondary_key`<sup>Required</sup> <a name="default_secondary_key" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```python
default_secondary_key: str
```

- *Type:* str

---

##### `partner_namespace_id`<sup>Required</sup> <a name="partner_namespace_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```python
partner_namespace_id: str
```

- *Type:* str

---

##### `primary_connection_string_alias`<sup>Required</sup> <a name="primary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```python
primary_connection_string_alias: str
```

- *Type:* str

---

##### `secondary_connection_string_alias`<sup>Required</sup> <a name="secondary_connection_string_alias" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```python
secondary_connection_string_alias: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```python
timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `alias_authorization_rule_id_input`<sup>Optional</sup> <a name="alias_authorization_rule_id_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```python
alias_authorization_rule_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>]

---

##### `alias_authorization_rule_id`<sup>Required</sup> <a name="alias_authorization_rule_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```python
alias_authorization_rule_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alias_authorization_rule_id: str = None,
  id: str = None,
  namespace_id: str = None,
  namespace_name: str = None,
  resource_group_name: str = None,
  timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">alias_authorization_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `alias_authorization_rule_id`<sup>Optional</sup> <a name="alias_authorization_rule_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```python
alias_authorization_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```python
timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_servicebus_namespace_disaster_recovery_config

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>]

---



