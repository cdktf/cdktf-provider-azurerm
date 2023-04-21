# `azurerm_synapse_workspace_aad_admin`

Refer to the Terraform Registory for docs: [`azurerm_synapse_workspace_aad_admin`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin).

# `synapseWorkspaceAadAdmin` Submodule <a name="`synapseWorkspaceAadAdmin` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceAadAdminA <a name="SynapseWorkspaceAadAdminA" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin azurerm_synapse_workspace_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  synapse_workspace_id: str,
  tenant_id: str,
  id: str = None,
  timeouts: SynapseWorkspaceAadAdminTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.login"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#timeouts SynapseWorkspaceAadAdminA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdminA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdminA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdminA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdminA#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceAadAdminTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SynapseWorkspaceAadAdminTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAadAdminAConfig <a name="SynapseWorkspaceAadAdminAConfig" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  synapse_workspace_id: str,
  tenant_id: str,
  id: str = None,
  timeouts: SynapseWorkspaceAadAdminTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.login"></a>

```python
login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.timeouts"></a>

```python
timeouts: SynapseWorkspaceAadAdminTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#timeouts SynapseWorkspaceAadAdminA#timeouts}

---

### SynapseWorkspaceAadAdminTimeouts <a name="SynapseWorkspaceAadAdminTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdminA#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdminA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdminA#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdminA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdminA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdminA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdminA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdminA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceAadAdminTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_workspace_aad_admin

synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SynapseWorkspaceAadAdminTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>, cdktf.IResolvable]

---



