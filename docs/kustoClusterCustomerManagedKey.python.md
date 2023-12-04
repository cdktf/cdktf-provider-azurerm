# `kustoClusterCustomerManagedKey` Submodule <a name="`kustoClusterCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoClusterCustomerManagedKey <a name="KustoClusterCustomerManagedKey" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key azurerm_kusto_cluster_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  key_name: str,
  key_vault_id: str,
  id: str = None,
  key_version: str = None,
  timeouts: KustoClusterCustomerManagedKeyTimeouts = None,
  user_identity: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#cluster_id KustoClusterCustomerManagedKey#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_name KustoClusterCustomerManagedKey#key_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_vault_id KustoClusterCustomerManagedKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#id KustoClusterCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyVersion">key_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_version KustoClusterCustomerManagedKey#key_version}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.userIdentity">user_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#user_identity KustoClusterCustomerManagedKey#user_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#cluster_id KustoClusterCustomerManagedKey#cluster_id}.

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_name KustoClusterCustomerManagedKey#key_name}.

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_vault_id KustoClusterCustomerManagedKey#key_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#id KustoClusterCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.keyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_version KustoClusterCustomerManagedKey#key_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#timeouts KustoClusterCustomerManagedKey#timeouts}

---

##### `user_identity`<sup>Optional</sup> <a name="user_identity" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.Initializer.parameter.userIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#user_identity KustoClusterCustomerManagedKey#user_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetUserIdentity">reset_user_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#create KustoClusterCustomerManagedKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#delete KustoClusterCustomerManagedKey#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#read KustoClusterCustomerManagedKey#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#update KustoClusterCustomerManagedKey#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_version` <a name="reset_key_version" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_identity` <a name="reset_user_identity" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.resetUserIdentity"></a>

```python
def reset_user_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KustoClusterCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KustoClusterCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KustoClusterCustomerManagedKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KustoClusterCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KustoClusterCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference">KustoClusterCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVersionInput">key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.userIdentityInput">user_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.userIdentity">user_identity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.timeouts"></a>

```python
timeouts: KustoClusterCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference">KustoClusterCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVersionInput"></a>

```python
key_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KustoClusterCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>]

---

##### `user_identity_input`<sup>Optional</sup> <a name="user_identity_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.userIdentityInput"></a>

```python
user_identity_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `user_identity`<sup>Required</sup> <a name="user_identity" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.userIdentity"></a>

```python
user_identity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterCustomerManagedKeyConfig <a name="KustoClusterCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  key_name: str,
  key_vault_id: str,
  id: str = None,
  key_version: str = None,
  timeouts: KustoClusterCustomerManagedKeyTimeouts = None,
  user_identity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#cluster_id KustoClusterCustomerManagedKey#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_name KustoClusterCustomerManagedKey#key_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_vault_id KustoClusterCustomerManagedKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#id KustoClusterCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyVersion">key_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_version KustoClusterCustomerManagedKey#key_version}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.userIdentity">user_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#user_identity KustoClusterCustomerManagedKey#user_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#cluster_id KustoClusterCustomerManagedKey#cluster_id}.

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_name KustoClusterCustomerManagedKey#key_name}.

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_vault_id KustoClusterCustomerManagedKey#key_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#id KustoClusterCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#key_version KustoClusterCustomerManagedKey#key_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.timeouts"></a>

```python
timeouts: KustoClusterCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#timeouts KustoClusterCustomerManagedKey#timeouts}

---

##### `user_identity`<sup>Optional</sup> <a name="user_identity" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyConfig.property.userIdentity"></a>

```python
user_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#user_identity KustoClusterCustomerManagedKey#user_identity}.

---

### KustoClusterCustomerManagedKeyTimeouts <a name="KustoClusterCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#create KustoClusterCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#delete KustoClusterCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#read KustoClusterCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#update KustoClusterCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#create KustoClusterCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#delete KustoClusterCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#read KustoClusterCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/kusto_cluster_customer_managed_key#update KustoClusterCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterCustomerManagedKeyTimeoutsOutputReference <a name="KustoClusterCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster_customer_managed_key

kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KustoClusterCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoClusterCustomerManagedKey.KustoClusterCustomerManagedKeyTimeouts">KustoClusterCustomerManagedKeyTimeouts</a>]

---



