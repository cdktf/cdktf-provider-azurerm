# `azurerm_machine_learning_inference_cluster`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_inference_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster).

# `machineLearningInferenceCluster` Submodule <a name="`machineLearningInferenceCluster` Submodule" id="@cdktf/provider-azurerm.machineLearningInferenceCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningInferenceCluster <a name="MachineLearningInferenceCluster" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster azurerm_machine_learning_inference_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_cluster_id: str,
  location: str,
  machine_learning_workspace_id: str,
  name: str,
  cluster_purpose: str = None,
  description: str = None,
  id: str = None,
  identity: MachineLearningInferenceClusterIdentity = None,
  ssl: MachineLearningInferenceClusterSsl = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningInferenceClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.clusterPurpose">cluster_purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.machineLearningWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}.

---

##### `cluster_purpose`<sup>Optional</sup> <a name="cluster_purpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.clusterPurpose"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl">put_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose">reset_cluster_purpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}.

---

##### `put_ssl` <a name="put_ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl"></a>

```python
def put_ssl(
  cert: str = None,
  cname: str = None,
  key: str = None,
  leaf_domain_label: str = None,
  overwrite_existing_domain: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.cert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}.

---

###### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.cname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}.

---

###### `leaf_domain_label`<sup>Optional</sup> <a name="leaf_domain_label" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.leafDomainLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}.

---

###### `overwrite_existing_domain`<sup>Optional</sup> <a name="overwrite_existing_domain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.overwriteExistingDomain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#update MachineLearningInferenceCluster#update}.

---

##### `reset_cluster_purpose` <a name="reset_cluster_purpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose"></a>

```python
def reset_cluster_purpose() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput">cluster_purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput">kubernetes_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput">machine_learning_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput">ssl_input</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose">cluster_purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity"></a>

```python
identity: MachineLearningInferenceClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl"></a>

```python
ssl: MachineLearningInferenceClusterSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts"></a>

```python
timeouts: MachineLearningInferenceClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a>

---

##### `cluster_purpose_input`<sup>Optional</sup> <a name="cluster_purpose_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput"></a>

```python
cluster_purpose_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput"></a>

```python
identity_input: MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_cluster_id_input`<sup>Optional</sup> <a name="kubernetes_cluster_id_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput"></a>

```python
kubernetes_cluster_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_learning_workspace_id_input`<sup>Optional</sup> <a name="machine_learning_workspace_id_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput"></a>

```python
machine_learning_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput"></a>

```python
ssl_input: MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MachineLearningInferenceClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>]

---

##### `cluster_purpose`<sup>Required</sup> <a name="cluster_purpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose"></a>

```python
cluster_purpose: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningInferenceClusterConfig <a name="MachineLearningInferenceClusterConfig" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_cluster_id: str,
  location: str,
  machine_learning_workspace_id: str,
  name: str,
  cluster_purpose: str = None,
  description: str = None,
  id: str = None,
  identity: MachineLearningInferenceClusterIdentity = None,
  ssl: MachineLearningInferenceClusterSsl = None,
  tags: typing.Mapping[str] = None,
  timeouts: MachineLearningInferenceClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId">machine_learning_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose">cluster_purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | ssl block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}.

---

##### `machine_learning_workspace_id`<sup>Required</sup> <a name="machine_learning_workspace_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId"></a>

```python
machine_learning_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}.

---

##### `cluster_purpose`<sup>Optional</sup> <a name="cluster_purpose" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose"></a>

```python
cluster_purpose: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity"></a>

```python
identity: MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl"></a>

```python
ssl: MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts"></a>

```python
timeouts: MachineLearningInferenceClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}

---

### MachineLearningInferenceClusterIdentity <a name="MachineLearningInferenceClusterIdentity" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}.

---

### MachineLearningInferenceClusterSsl <a name="MachineLearningInferenceClusterSsl" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterSsl(
  cert: str = None,
  cname: str = None,
  key: str = None,
  leaf_domain_label: str = None,
  overwrite_existing_domain: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert">cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname">cname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel">leaf_domain_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain">overwrite_existing_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert"></a>

```python
cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}.

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname"></a>

```python
cname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}.

---

##### `leaf_domain_label`<sup>Optional</sup> <a name="leaf_domain_label" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel"></a>

```python
leaf_domain_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}.

---

##### `overwrite_existing_domain`<sup>Optional</sup> <a name="overwrite_existing_domain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain"></a>

```python
overwrite_existing_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}.

---

### MachineLearningInferenceClusterTimeouts <a name="MachineLearningInferenceClusterTimeouts" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#update MachineLearningInferenceCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/machine_learning_inference_cluster#update MachineLearningInferenceCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningInferenceClusterIdentityOutputReference <a name="MachineLearningInferenceClusterIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---


### MachineLearningInferenceClusterSslOutputReference <a name="MachineLearningInferenceClusterSslOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert">reset_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname">reset_cname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel">reset_leaf_domain_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain">reset_overwrite_existing_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert` <a name="reset_cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert"></a>

```python
def reset_cert() -> None
```

##### `reset_cname` <a name="reset_cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname"></a>

```python
def reset_cname() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_leaf_domain_label` <a name="reset_leaf_domain_label" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel"></a>

```python
def reset_leaf_domain_label() -> None
```

##### `reset_overwrite_existing_domain` <a name="reset_overwrite_existing_domain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain"></a>

```python
def reset_overwrite_existing_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput">cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput">leaf_domain_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput">overwrite_existing_domain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel">leaf_domain_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain">overwrite_existing_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `cname_input`<sup>Optional</sup> <a name="cname_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput"></a>

```python
cname_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `leaf_domain_label_input`<sup>Optional</sup> <a name="leaf_domain_label_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput"></a>

```python
leaf_domain_label_input: str
```

- *Type:* str

---

##### `overwrite_existing_domain_input`<sup>Optional</sup> <a name="overwrite_existing_domain_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput"></a>

```python
overwrite_existing_domain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `leaf_domain_label`<sup>Required</sup> <a name="leaf_domain_label" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel"></a>

```python
leaf_domain_label: str
```

- *Type:* str

---

##### `overwrite_existing_domain`<sup>Required</sup> <a name="overwrite_existing_domain" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain"></a>

```python
overwrite_existing_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue"></a>

```python
internal_value: MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---


### MachineLearningInferenceClusterTimeoutsOutputReference <a name="MachineLearningInferenceClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import machine_learning_inference_cluster

machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MachineLearningInferenceClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>]

---



