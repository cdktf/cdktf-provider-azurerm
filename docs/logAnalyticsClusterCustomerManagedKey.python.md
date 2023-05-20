# `azurerm_log_analytics_cluster_customer_managed_key`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_cluster_customer_managed_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key).

# `logAnalyticsClusterCustomerManagedKey` Submodule <a name="`logAnalyticsClusterCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsClusterCustomerManagedKey <a name="LogAnalyticsClusterCustomerManagedKey" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key azurerm_log_analytics_cluster_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_key_id: str,
  log_analytics_cluster_id: str,
  id: str = None,
  timeouts: LogAnalyticsClusterCustomerManagedKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.logAnalyticsClusterId">log_analytics_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}.

---

##### `log_analytics_cluster_id`<sup>Required</sup> <a name="log_analytics_cluster_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.logAnalyticsClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#timeouts LogAnalyticsClusterCustomerManagedKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#create LogAnalyticsClusterCustomerManagedKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#delete LogAnalyticsClusterCustomerManagedKey#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#read LogAnalyticsClusterCustomerManagedKey#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#update LogAnalyticsClusterCustomerManagedKey#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference">LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterIdInput">log_analytics_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterId">log_analytics_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeouts"></a>

```python
timeouts: LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference">LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `log_analytics_cluster_id_input`<sup>Optional</sup> <a name="log_analytics_cluster_id_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterIdInput"></a>

```python
log_analytics_cluster_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LogAnalyticsClusterCustomerManagedKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `log_analytics_cluster_id`<sup>Required</sup> <a name="log_analytics_cluster_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterId"></a>

```python
log_analytics_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsClusterCustomerManagedKeyConfig <a name="LogAnalyticsClusterCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_key_id: str,
  log_analytics_cluster_id: str,
  id: str = None,
  timeouts: LogAnalyticsClusterCustomerManagedKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.logAnalyticsClusterId">log_analytics_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}.

---

##### `log_analytics_cluster_id`<sup>Required</sup> <a name="log_analytics_cluster_id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.logAnalyticsClusterId"></a>

```python
log_analytics_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsClusterCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#timeouts LogAnalyticsClusterCustomerManagedKey#timeouts}

---

### LogAnalyticsClusterCustomerManagedKeyTimeouts <a name="LogAnalyticsClusterCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#create LogAnalyticsClusterCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#delete LogAnalyticsClusterCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#read LogAnalyticsClusterCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#update LogAnalyticsClusterCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#create LogAnalyticsClusterCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#delete LogAnalyticsClusterCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#read LogAnalyticsClusterCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/log_analytics_cluster_customer_managed_key#update LogAnalyticsClusterCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference <a name="LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_cluster_customer_managed_key

logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LogAnalyticsClusterCustomerManagedKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>, cdktf.IResolvable]

---



