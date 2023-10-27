# `azurerm_cognitive_account_customer_managed_key`

Refer to the Terraform Registory for docs: [`azurerm_cognitive_account_customer_managed_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key).

# `cognitiveAccountCustomerManagedKey` Submodule <a name="`cognitiveAccountCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountCustomerManagedKeyA <a name="CognitiveAccountCustomerManagedKeyA" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key azurerm_cognitive_account_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cognitive_account_id: str,
  key_vault_key_id: str,
  id: str = None,
  identity_client_id: str = None,
  timeouts: CognitiveAccountCustomerManagedKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.identityClientId">identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.cognitiveAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}.

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_client_id`<sup>Optional</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.identityClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#timeouts CognitiveAccountCustomerManagedKeyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetIdentityClientId">reset_identity_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#create CognitiveAccountCustomerManagedKeyA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#delete CognitiveAccountCustomerManagedKeyA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#read CognitiveAccountCustomerManagedKeyA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#update CognitiveAccountCustomerManagedKeyA#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_client_id` <a name="reset_identity_client_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetIdentityClientId"></a>

```python
def reset_identity_client_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CognitiveAccountCustomerManagedKeyA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CognitiveAccountCustomerManagedKeyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitiveAccountCustomerManagedKeyA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitiveAccountCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitiveAccountCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference">CognitiveAccountCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountIdInput">cognitive_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientIdInput">identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientId">identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeouts"></a>

```python
timeouts: CognitiveAccountCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference">CognitiveAccountCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `cognitive_account_id_input`<sup>Optional</sup> <a name="cognitive_account_id_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountIdInput"></a>

```python
cognitive_account_id_input: str
```

- *Type:* str

---

##### `identity_client_id_input`<sup>Optional</sup> <a name="identity_client_id_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientIdInput"></a>

```python
identity_client_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CognitiveAccountCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>]

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_client_id`<sup>Required</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountCustomerManagedKeyAConfig <a name="CognitiveAccountCustomerManagedKeyAConfig" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cognitive_account_id: str,
  key_vault_key_id: str,
  id: str = None,
  identity_client_id: str = None,
  timeouts: CognitiveAccountCustomerManagedKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.cognitiveAccountId">cognitive_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.identityClientId">identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cognitive_account_id`<sup>Required</sup> <a name="cognitive_account_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.cognitiveAccountId"></a>

```python
cognitive_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}.

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_client_id`<sup>Optional</sup> <a name="identity_client_id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.timeouts"></a>

```python
timeouts: CognitiveAccountCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#timeouts CognitiveAccountCustomerManagedKeyA#timeouts}

---

### CognitiveAccountCustomerManagedKeyTimeouts <a name="CognitiveAccountCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#create CognitiveAccountCustomerManagedKeyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#delete CognitiveAccountCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#read CognitiveAccountCustomerManagedKeyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#update CognitiveAccountCustomerManagedKeyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#create CognitiveAccountCustomerManagedKeyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#delete CognitiveAccountCustomerManagedKeyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#read CognitiveAccountCustomerManagedKeyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cognitive_account_customer_managed_key#update CognitiveAccountCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountCustomerManagedKeyTimeoutsOutputReference <a name="CognitiveAccountCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cognitive_account_customer_managed_key

cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CognitiveAccountCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>]

---



