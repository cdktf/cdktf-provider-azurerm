# `azurerm_kubernetes_cluster_extension`

Refer to the Terraform Registory for docs: [`azurerm_kubernetes_cluster_extension`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension).

# `kubernetesClusterExtension` Submodule <a name="`kubernetesClusterExtension` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterExtension <a name="KubernetesClusterExtension" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension azurerm_kubernetes_cluster_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtension(
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
  extension_type: str,
  name: str,
  configuration_protected_settings: typing.Mapping[str] = None,
  configuration_settings: typing.Mapping[str] = None,
  id: str = None,
  plan: KubernetesClusterExtensionPlan = None,
  release_namespace: str = None,
  release_train: str = None,
  target_namespace: str = None,
  timeouts: KubernetesClusterExtensionTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.extensionType">extension_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationProtectedSettings">configuration_protected_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationSettings">configuration_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseNamespace">release_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseTrain">release_train</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.targetNamespace">target_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}.

---

##### `extension_type`<sup>Required</sup> <a name="extension_type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.extensionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `configuration_protected_settings`<sup>Optional</sup> <a name="configuration_protected_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationProtectedSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}.

---

##### `configuration_settings`<sup>Optional</sup> <a name="configuration_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}

---

##### `release_namespace`<sup>Optional</sup> <a name="release_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}.

---

##### `release_train`<sup>Optional</sup> <a name="release_train" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseTrain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}.

---

##### `target_namespace`<sup>Optional</sup> <a name="target_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.targetNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings">reset_configuration_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings">reset_configuration_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace">reset_release_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain">reset_release_train</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace">reset_target_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str,
  promotion_code: str = None,
  version: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}.

---

###### `promotion_code`<sup>Optional</sup> <a name="promotion_code" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.promotionCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}.

---

##### `reset_configuration_protected_settings` <a name="reset_configuration_protected_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings"></a>

```python
def reset_configuration_protected_settings() -> None
```

##### `reset_configuration_settings` <a name="reset_configuration_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings"></a>

```python
def reset_configuration_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_release_namespace` <a name="reset_release_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace"></a>

```python
def reset_release_namespace() -> None
```

##### `reset_release_train` <a name="reset_release_train" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain"></a>

```python
def reset_release_train() -> None
```

##### `reset_target_namespace` <a name="reset_target_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace"></a>

```python
def reset_target_namespace() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity">aks_assigned_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput">configuration_protected_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput">configuration_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput">extension_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput">release_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput">release_train_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput">target_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings">configuration_protected_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings">configuration_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType">extension_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace">release_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain">release_train</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace">target_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aks_assigned_identity`<sup>Required</sup> <a name="aks_assigned_identity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity"></a>

```python
aks_assigned_identity: KubernetesClusterExtensionAksAssignedIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a>

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan"></a>

```python
plan: KubernetesClusterExtensionPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts"></a>

```python
timeouts: KubernetesClusterExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `configuration_protected_settings_input`<sup>Optional</sup> <a name="configuration_protected_settings_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput"></a>

```python
configuration_protected_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `configuration_settings_input`<sup>Optional</sup> <a name="configuration_settings_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput"></a>

```python
configuration_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extension_type_input`<sup>Optional</sup> <a name="extension_type_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput"></a>

```python
extension_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput"></a>

```python
plan_input: KubernetesClusterExtensionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---

##### `release_namespace_input`<sup>Optional</sup> <a name="release_namespace_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput"></a>

```python
release_namespace_input: str
```

- *Type:* str

---

##### `release_train_input`<sup>Optional</sup> <a name="release_train_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput"></a>

```python
release_train_input: str
```

- *Type:* str

---

##### `target_namespace_input`<sup>Optional</sup> <a name="target_namespace_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput"></a>

```python
target_namespace_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KubernetesClusterExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `configuration_protected_settings`<sup>Required</sup> <a name="configuration_protected_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings"></a>

```python
configuration_protected_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `configuration_settings`<sup>Required</sup> <a name="configuration_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings"></a>

```python
configuration_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extension_type`<sup>Required</sup> <a name="extension_type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType"></a>

```python
extension_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_namespace`<sup>Required</sup> <a name="release_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace"></a>

```python
release_namespace: str
```

- *Type:* str

---

##### `release_train`<sup>Required</sup> <a name="release_train" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain"></a>

```python
release_train: str
```

- *Type:* str

---

##### `target_namespace`<sup>Required</sup> <a name="target_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace"></a>

```python
target_namespace: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterExtensionAksAssignedIdentity <a name="KubernetesClusterExtensionAksAssignedIdentity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity()
```


### KubernetesClusterExtensionConfig <a name="KubernetesClusterExtensionConfig" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  extension_type: str,
  name: str,
  configuration_protected_settings: typing.Mapping[str] = None,
  configuration_settings: typing.Mapping[str] = None,
  id: str = None,
  plan: KubernetesClusterExtensionPlan = None,
  release_namespace: str = None,
  release_train: str = None,
  target_namespace: str = None,
  timeouts: KubernetesClusterExtensionTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType">extension_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings">configuration_protected_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings">configuration_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace">release_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain">release_train</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace">target_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}.

---

##### `extension_type`<sup>Required</sup> <a name="extension_type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType"></a>

```python
extension_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `configuration_protected_settings`<sup>Optional</sup> <a name="configuration_protected_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings"></a>

```python
configuration_protected_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}.

---

##### `configuration_settings`<sup>Optional</sup> <a name="configuration_settings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings"></a>

```python
configuration_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan"></a>

```python
plan: KubernetesClusterExtensionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}

---

##### `release_namespace`<sup>Optional</sup> <a name="release_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace"></a>

```python
release_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}.

---

##### `release_train`<sup>Optional</sup> <a name="release_train" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain"></a>

```python
release_train: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}.

---

##### `target_namespace`<sup>Optional</sup> <a name="target_namespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace"></a>

```python
target_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts"></a>

```python
timeouts: KubernetesClusterExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionPlan <a name="KubernetesClusterExtensionPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionPlan(
  name: str,
  product: str,
  publisher: str,
  promotion_code: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode">promotion_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}.

---

##### `promotion_code`<sup>Optional</sup> <a name="promotion_code" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode"></a>

```python
promotion_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionTimeouts <a name="KubernetesClusterExtensionTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterExtensionAksAssignedIdentityList <a name="KubernetesClusterExtensionAksAssignedIdentityList" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KubernetesClusterExtensionAksAssignedIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KubernetesClusterExtensionAksAssignedIdentityOutputReference <a name="KubernetesClusterExtensionAksAssignedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterExtensionAksAssignedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a>

---


### KubernetesClusterExtensionPlanOutputReference <a name="KubernetesClusterExtensionPlanOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode">reset_promotion_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_promotion_code` <a name="reset_promotion_code" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode"></a>

```python
def reset_promotion_code() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput">promotion_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode">promotion_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `promotion_code_input`<sup>Optional</sup> <a name="promotion_code_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput"></a>

```python
promotion_code_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `promotion_code`<sup>Required</sup> <a name="promotion_code" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode"></a>

```python
promotion_code: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue"></a>

```python
internal_value: KubernetesClusterExtensionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---


### KubernetesClusterExtensionTimeoutsOutputReference <a name="KubernetesClusterExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kubernetes_cluster_extension

kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KubernetesClusterExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>]

---



