# `azurerm_key_vault_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy).

# `keyVaultAccessPolicy` Submodule <a name="`keyVaultAccessPolicy` Submodule" id="@cdktf/provider-azurerm.keyVaultAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultAccessPolicyA <a name="KeyVaultAccessPolicyA" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy azurerm_key_vault_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  object_id: str,
  tenant_id: str,
  application_id: str = None,
  certificate_permissions: typing.List[str] = None,
  id: str = None,
  key_permissions: typing.List[str] = None,
  secret_permissions: typing.List[str] = None,
  storage_permissions: typing.List[str] = None,
  timeouts: KeyVaultAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.certificatePermissions">certificate_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyPermissions">key_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.secretPermissions">secret_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.storagePermissions">storage_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}.

---

##### `certificate_permissions`<sup>Optional</sup> <a name="certificate_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.certificatePermissions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_permissions`<sup>Optional</sup> <a name="key_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyPermissions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}.

---

##### `secret_permissions`<sup>Optional</sup> <a name="secret_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.secretPermissions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}.

---

##### `storage_permissions`<sup>Optional</sup> <a name="storage_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.storagePermissions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#timeouts KeyVaultAccessPolicyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions">reset_certificate_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions">reset_key_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions">reset_secret_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions">reset_storage_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}.

---

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_certificate_permissions` <a name="reset_certificate_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions"></a>

```python
def reset_certificate_permissions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_permissions` <a name="reset_key_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions"></a>

```python
def reset_key_permissions() -> None
```

##### `reset_secret_permissions` <a name="reset_secret_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions"></a>

```python
def reset_secret_permissions() -> None
```

##### `reset_storage_permissions` <a name="reset_storage_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions"></a>

```python
def reset_storage_permissions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput">certificate_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput">key_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput">secret_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput">storage_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions">certificate_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions">key_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions">secret_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions">storage_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts"></a>

```python
timeouts: KeyVaultAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `certificate_permissions_input`<sup>Optional</sup> <a name="certificate_permissions_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput"></a>

```python
certificate_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_permissions_input`<sup>Optional</sup> <a name="key_permissions_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput"></a>

```python
key_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `secret_permissions_input`<sup>Optional</sup> <a name="secret_permissions_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput"></a>

```python
secret_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_permissions_input`<sup>Optional</sup> <a name="storage_permissions_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput"></a>

```python
storage_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeyVaultAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `certificate_permissions`<sup>Required</sup> <a name="certificate_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions"></a>

```python
certificate_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_permissions`<sup>Required</sup> <a name="key_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions"></a>

```python
key_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `secret_permissions`<sup>Required</sup> <a name="secret_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions"></a>

```python
secret_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_permissions`<sup>Required</sup> <a name="storage_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions"></a>

```python
storage_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicyAConfig <a name="KeyVaultAccessPolicyAConfig" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_vault_id: str,
  object_id: str,
  tenant_id: str,
  application_id: str = None,
  certificate_permissions: typing.List[str] = None,
  id: str = None,
  key_permissions: typing.List[str] = None,
  secret_permissions: typing.List[str] = None,
  storage_permissions: typing.List[str] = None,
  timeouts: KeyVaultAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions">certificate_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions">key_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions">secret_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions">storage_permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}.

---

##### `certificate_permissions`<sup>Optional</sup> <a name="certificate_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions"></a>

```python
certificate_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_permissions`<sup>Optional</sup> <a name="key_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions"></a>

```python
key_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}.

---

##### `secret_permissions`<sup>Optional</sup> <a name="secret_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions"></a>

```python
secret_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}.

---

##### `storage_permissions`<sup>Optional</sup> <a name="storage_permissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions"></a>

```python
storage_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts"></a>

```python
timeouts: KeyVaultAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#timeouts KeyVaultAccessPolicyA#timeouts}

---

### KeyVaultAccessPolicyTimeouts <a name="KeyVaultAccessPolicyTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyTimeoutsOutputReference <a name="KeyVaultAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import key_vault_access_policy

keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeyVaultAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>]

---



