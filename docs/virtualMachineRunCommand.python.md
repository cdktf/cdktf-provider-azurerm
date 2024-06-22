# `virtualMachineRunCommand` Submodule <a name="`virtualMachineRunCommand` Submodule" id="@cdktf/provider-azurerm.virtualMachineRunCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRunCommand <a name="VirtualMachineRunCommand" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command azurerm_virtual_machine_run_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommand(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  source: VirtualMachineRunCommandSource,
  virtual_machine_id: str,
  error_blob_managed_identity: VirtualMachineRunCommandErrorBlobManagedIdentity = None,
  error_blob_uri: str = None,
  id: str = None,
  output_blob_managed_identity: VirtualMachineRunCommandOutputBlobManagedIdentity = None,
  output_blob_uri: str = None,
  parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]] = None,
  protected_parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]] = None,
  run_as_password: str = None,
  run_as_user: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineRunCommandTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.errorBlobManagedIdentity">error_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | error_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.errorBlobUri">error_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.outputBlobManagedIdentity">output_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | output_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.outputBlobUri">output_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.protectedParameter">protected_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]</code> | protected_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.runAsPassword">run_as_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.runAsUser">run_as_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#source VirtualMachineRunCommand#source}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}.

---

##### `error_blob_managed_identity`<sup>Optional</sup> <a name="error_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.errorBlobManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

error_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_managed_identity VirtualMachineRunCommand#error_blob_managed_identity}

---

##### `error_blob_uri`<sup>Optional</sup> <a name="error_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.errorBlobUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output_blob_managed_identity`<sup>Optional</sup> <a name="output_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.outputBlobManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

output_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_managed_identity VirtualMachineRunCommand#output_blob_managed_identity}

---

##### `output_blob_uri`<sup>Optional</sup> <a name="output_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.outputBlobUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#parameter VirtualMachineRunCommand#parameter}

---

##### `protected_parameter`<sup>Optional</sup> <a name="protected_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.protectedParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]

protected_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#protected_parameter VirtualMachineRunCommand#protected_parameter}

---

##### `run_as_password`<sup>Optional</sup> <a name="run_as_password" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.runAsPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}.

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.runAsUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#timeouts VirtualMachineRunCommand#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity">put_error_blob_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity">put_output_blob_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter">put_protected_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity">reset_error_blob_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri">reset_error_blob_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity">reset_output_blob_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri">reset_output_blob_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter">reset_protected_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword">reset_run_as_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser">reset_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_error_blob_managed_identity` <a name="put_error_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity"></a>

```python
def put_error_blob_managed_identity(
  client_id: str = None,
  object_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

###### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

##### `put_output_blob_managed_identity` <a name="put_output_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity"></a>

```python
def put_output_blob_managed_identity(
  client_id: str = None,
  object_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

###### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]

---

##### `put_protected_parameter` <a name="put_protected_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter"></a>

```python
def put_protected_parameter(
  value: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource"></a>

```python
def put_source(
  command_id: str = None,
  script: str = None,
  script_uri: str = None,
  script_uri_managed_identity: VirtualMachineRunCommandSourceScriptUriManagedIdentity = None
) -> None
```

###### `command_id`<sup>Optional</sup> <a name="command_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.commandId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}.

---

###### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.script"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}.

---

###### `script_uri`<sup>Optional</sup> <a name="script_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.scriptUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}.

---

###### `script_uri_managed_identity`<sup>Optional</sup> <a name="script_uri_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.scriptUriManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

script_uri_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script_uri_managed_identity VirtualMachineRunCommand#script_uri_managed_identity}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}.

---

##### `reset_error_blob_managed_identity` <a name="reset_error_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity"></a>

```python
def reset_error_blob_managed_identity() -> None
```

##### `reset_error_blob_uri` <a name="reset_error_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri"></a>

```python
def reset_error_blob_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_output_blob_managed_identity` <a name="reset_output_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity"></a>

```python
def reset_output_blob_managed_identity() -> None
```

##### `reset_output_blob_uri` <a name="reset_output_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri"></a>

```python
def reset_output_blob_uri() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_protected_parameter` <a name="reset_protected_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter"></a>

```python
def reset_protected_parameter() -> None
```

##### `reset_run_as_password` <a name="reset_run_as_password" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword"></a>

```python
def reset_run_as_password() -> None
```

##### `reset_run_as_user` <a name="reset_run_as_user" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser"></a>

```python
def reset_run_as_user() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommand.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommand.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommand.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineRunCommand to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineRunCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRunCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity">error_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView">instance_view</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity">output_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter">protected_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput">error_blob_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput">error_blob_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput">output_blob_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput">output_blob_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput">protected_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput">run_as_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput">run_as_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri">error_blob_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri">output_blob_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword">run_as_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser">run_as_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_blob_managed_identity`<sup>Required</sup> <a name="error_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity"></a>

```python
error_blob_managed_identity: VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a>

---

##### `instance_view`<sup>Required</sup> <a name="instance_view" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView"></a>

```python
instance_view: VirtualMachineRunCommandInstanceViewList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a>

---

##### `output_blob_managed_identity`<sup>Required</sup> <a name="output_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity"></a>

```python
output_blob_managed_identity: VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter"></a>

```python
parameter: VirtualMachineRunCommandParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a>

---

##### `protected_parameter`<sup>Required</sup> <a name="protected_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter"></a>

```python
protected_parameter: VirtualMachineRunCommandProtectedParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source"></a>

```python
source: VirtualMachineRunCommandSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts"></a>

```python
timeouts: VirtualMachineRunCommandTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a>

---

##### `error_blob_managed_identity_input`<sup>Optional</sup> <a name="error_blob_managed_identity_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput"></a>

```python
error_blob_managed_identity_input: VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `error_blob_uri_input`<sup>Optional</sup> <a name="error_blob_uri_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput"></a>

```python
error_blob_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_blob_managed_identity_input`<sup>Optional</sup> <a name="output_blob_managed_identity_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput"></a>

```python
output_blob_managed_identity_input: VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `output_blob_uri_input`<sup>Optional</sup> <a name="output_blob_uri_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput"></a>

```python
output_blob_uri_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]

---

##### `protected_parameter_input`<sup>Optional</sup> <a name="protected_parameter_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput"></a>

```python
protected_parameter_input: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]

---

##### `run_as_password_input`<sup>Optional</sup> <a name="run_as_password_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput"></a>

```python
run_as_password_input: str
```

- *Type:* str

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput"></a>

```python
run_as_user_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput"></a>

```python
source_input: VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineRunCommandTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>]

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `error_blob_uri`<sup>Required</sup> <a name="error_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri"></a>

```python
error_blob_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_blob_uri`<sup>Required</sup> <a name="output_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri"></a>

```python
output_blob_uri: str
```

- *Type:* str

---

##### `run_as_password`<sup>Required</sup> <a name="run_as_password" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword"></a>

```python
run_as_password: str
```

- *Type:* str

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser"></a>

```python
run_as_user: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRunCommandConfig <a name="VirtualMachineRunCommandConfig" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  source: VirtualMachineRunCommandSource,
  virtual_machine_id: str,
  error_blob_managed_identity: VirtualMachineRunCommandErrorBlobManagedIdentity = None,
  error_blob_uri: str = None,
  id: str = None,
  output_blob_managed_identity: VirtualMachineRunCommandOutputBlobManagedIdentity = None,
  output_blob_uri: str = None,
  parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]] = None,
  protected_parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]] = None,
  run_as_password: str = None,
  run_as_user: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineRunCommandTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity">error_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | error_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri">error_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity">output_blob_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | output_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri">output_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter">protected_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]</code> | protected_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword">run_as_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser">run_as_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source"></a>

```python
source: VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#source VirtualMachineRunCommand#source}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}.

---

##### `error_blob_managed_identity`<sup>Optional</sup> <a name="error_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity"></a>

```python
error_blob_managed_identity: VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

error_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_managed_identity VirtualMachineRunCommand#error_blob_managed_identity}

---

##### `error_blob_uri`<sup>Optional</sup> <a name="error_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri"></a>

```python
error_blob_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output_blob_managed_identity`<sup>Optional</sup> <a name="output_blob_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity"></a>

```python
output_blob_managed_identity: VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

output_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_managed_identity VirtualMachineRunCommand#output_blob_managed_identity}

---

##### `output_blob_uri`<sup>Optional</sup> <a name="output_blob_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri"></a>

```python
output_blob_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#parameter VirtualMachineRunCommand#parameter}

---

##### `protected_parameter`<sup>Optional</sup> <a name="protected_parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter"></a>

```python
protected_parameter: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]

protected_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#protected_parameter VirtualMachineRunCommand#protected_parameter}

---

##### `run_as_password`<sup>Optional</sup> <a name="run_as_password" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword"></a>

```python
run_as_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}.

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser"></a>

```python
run_as_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineRunCommandTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#timeouts VirtualMachineRunCommand#timeouts}

---

### VirtualMachineRunCommandErrorBlobManagedIdentity <a name="VirtualMachineRunCommandErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity(
  client_id: str = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandInstanceView <a name="VirtualMachineRunCommandInstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandInstanceView()
```


### VirtualMachineRunCommandOutputBlobManagedIdentity <a name="VirtualMachineRunCommandOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity(
  client_id: str = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandParameter <a name="VirtualMachineRunCommandParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandProtectedParameter <a name="VirtualMachineRunCommandProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandSource <a name="VirtualMachineRunCommandSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandSource(
  command_id: str = None,
  script: str = None,
  script_uri: str = None,
  script_uri_managed_identity: VirtualMachineRunCommandSourceScriptUriManagedIdentity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId">command_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri">script_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity">script_uri_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | script_uri_managed_identity block. |

---

##### `command_id`<sup>Optional</sup> <a name="command_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId"></a>

```python
command_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script"></a>

```python
script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}.

---

##### `script_uri`<sup>Optional</sup> <a name="script_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri"></a>

```python
script_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}.

---

##### `script_uri_managed_identity`<sup>Optional</sup> <a name="script_uri_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity"></a>

```python
script_uri_managed_identity: VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

script_uri_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#script_uri_managed_identity VirtualMachineRunCommand#script_uri_managed_identity}

---

### VirtualMachineRunCommandSourceScriptUriManagedIdentity <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity(
  client_id: str = None,
  object_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandTimeouts <a name="VirtualMachineRunCommandTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---


### VirtualMachineRunCommandInstanceViewList <a name="VirtualMachineRunCommandInstanceViewList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineRunCommandInstanceViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VirtualMachineRunCommandInstanceViewOutputReference <a name="VirtualMachineRunCommandInstanceViewOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage">execution_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `execution_message`<sup>Required</sup> <a name="execution_message" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage"></a>

```python
execution_message: str
```

- *Type:* str

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineRunCommandInstanceView
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a>

---


### VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---


### VirtualMachineRunCommandParameterList <a name="VirtualMachineRunCommandParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineRunCommandParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]]

---


### VirtualMachineRunCommandParameterOutputReference <a name="VirtualMachineRunCommandParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineRunCommandParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>]

---


### VirtualMachineRunCommandProtectedParameterList <a name="VirtualMachineRunCommandProtectedParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineRunCommandProtectedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineRunCommandProtectedParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]]

---


### VirtualMachineRunCommandProtectedParameterOutputReference <a name="VirtualMachineRunCommandProtectedParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineRunCommandProtectedParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>]

---


### VirtualMachineRunCommandSourceOutputReference <a name="VirtualMachineRunCommandSourceOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity">put_script_uri_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId">reset_command_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri">reset_script_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity">reset_script_uri_managed_identity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_uri_managed_identity` <a name="put_script_uri_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity"></a>

```python
def put_script_uri_managed_identity(
  client_id: str = None,
  object_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

###### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

##### `reset_command_id` <a name="reset_command_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId"></a>

```python
def reset_command_id() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_script_uri` <a name="reset_script_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri"></a>

```python
def reset_script_uri() -> None
```

##### `reset_script_uri_managed_identity` <a name="reset_script_uri_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity"></a>

```python
def reset_script_uri_managed_identity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity">script_uri_managed_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput">command_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput">script_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput">script_uri_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId">command_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri">script_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_uri_managed_identity`<sup>Required</sup> <a name="script_uri_managed_identity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity"></a>

```python
script_uri_managed_identity: VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a>

---

##### `command_id_input`<sup>Optional</sup> <a name="command_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput"></a>

```python
command_id_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `script_uri_input`<sup>Optional</sup> <a name="script_uri_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput"></a>

```python
script_uri_input: str
```

- *Type:* str

---

##### `script_uri_managed_identity_input`<sup>Optional</sup> <a name="script_uri_managed_identity_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput"></a>

```python
script_uri_managed_identity_input: VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `command_id`<sup>Required</sup> <a name="command_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId"></a>

```python
command_id: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `script_uri`<sup>Required</sup> <a name="script_uri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri"></a>

```python
script_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---


### VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId">reset_object_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId"></a>

```python
def reset_object_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---


### VirtualMachineRunCommandTimeoutsOutputReference <a name="VirtualMachineRunCommandTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine_run_command

virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineRunCommandTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>]

---



