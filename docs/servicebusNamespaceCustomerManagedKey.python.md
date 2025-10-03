# `servicebusNamespaceCustomerManagedKey` Submodule <a name="`servicebusNamespaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceCustomerManagedKeyA <a name="ServicebusNamespaceCustomerManagedKeyA" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key azurerm_servicebus_namespace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA(
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
  namespace_id: str,
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusNamespaceCustomerManagedKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#timeouts ServicebusNamespaceCustomerManagedKeyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusNamespaceCustomerManagedKeyA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusNamespaceCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts"></a>

```python
timeouts: ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusNamespaceCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceCustomerManagedKeyAConfig <a name="ServicebusNamespaceCustomerManagedKeyAConfig" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_key_id: str,
  namespace_id: str,
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusNamespaceCustomerManagedKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts"></a>

```python
timeouts: ServicebusNamespaceCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#timeouts ServicebusNamespaceCustomerManagedKeyA#timeouts}

---

### ServicebusNamespaceCustomerManagedKeyTimeouts <a name="ServicebusNamespaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference <a name="ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_customer_managed_key

servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusNamespaceCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>]

---



