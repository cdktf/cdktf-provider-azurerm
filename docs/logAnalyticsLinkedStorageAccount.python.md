# `azurerm_log_analytics_linked_storage_account`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_linked_storage_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account).

# `logAnalyticsLinkedStorageAccount` Submodule <a name="`logAnalyticsLinkedStorageAccount` Submodule" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLinkedStorageAccount <a name="LogAnalyticsLinkedStorageAccount" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account azurerm_log_analytics_linked_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_type: str,
  resource_group_name: str,
  storage_account_ids: typing.List[str],
  workspace_resource_id: str,
  id: str = None,
  timeouts: LogAnalyticsLinkedStorageAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.dataSourceType">data_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.storageAccountIds">storage_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.dataSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}.

---

##### `storage_account_ids`<sup>Required</sup> <a name="storage_account_ids" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.storageAccountIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}.

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.workspaceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#timeouts LogAnalyticsLinkedStorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#create LogAnalyticsLinkedStorageAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#delete LogAnalyticsLinkedStorageAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#read LogAnalyticsLinkedStorageAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#update LogAnalyticsLinkedStorageAccount#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference">LogAnalyticsLinkedStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceTypeInput">data_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIdsInput">storage_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceIdInput">workspace_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceType">data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIds">storage_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeouts"></a>

```python
timeouts: LogAnalyticsLinkedStorageAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference">LogAnalyticsLinkedStorageAccountTimeoutsOutputReference</a>

---

##### `data_source_type_input`<sup>Optional</sup> <a name="data_source_type_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceTypeInput"></a>

```python
data_source_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_account_ids_input`<sup>Optional</sup> <a name="storage_account_ids_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIdsInput"></a>

```python
storage_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogAnalyticsLinkedStorageAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>]

---

##### `workspace_resource_id_input`<sup>Optional</sup> <a name="workspace_resource_id_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceIdInput"></a>

```python
workspace_resource_id_input: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_ids`<sup>Required</sup> <a name="storage_account_ids" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIds"></a>

```python
storage_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceId"></a>

```python
workspace_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLinkedStorageAccountConfig <a name="LogAnalyticsLinkedStorageAccountConfig" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_type: str,
  resource_group_name: str,
  storage_account_ids: typing.List[str],
  workspace_resource_id: str,
  id: str = None,
  timeouts: LogAnalyticsLinkedStorageAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dataSourceType">data_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.storageAccountIds">storage_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dataSourceType"></a>

```python
data_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}.

---

##### `storage_account_ids`<sup>Required</sup> <a name="storage_account_ids" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.storageAccountIds"></a>

```python
storage_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}.

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceResourceId"></a>

```python
workspace_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsLinkedStorageAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#timeouts LogAnalyticsLinkedStorageAccount#timeouts}

---

### LogAnalyticsLinkedStorageAccountTimeouts <a name="LogAnalyticsLinkedStorageAccountTimeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#create LogAnalyticsLinkedStorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#delete LogAnalyticsLinkedStorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#read LogAnalyticsLinkedStorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#update LogAnalyticsLinkedStorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#create LogAnalyticsLinkedStorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#delete LogAnalyticsLinkedStorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#read LogAnalyticsLinkedStorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/log_analytics_linked_storage_account#update LogAnalyticsLinkedStorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLinkedStorageAccountTimeoutsOutputReference <a name="LogAnalyticsLinkedStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_linked_storage_account

logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsLinkedStorageAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>]

---



