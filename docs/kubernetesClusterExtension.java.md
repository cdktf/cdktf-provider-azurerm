# `kubernetesClusterExtension` Submodule <a name="`kubernetesClusterExtension` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterExtension <a name="KubernetesClusterExtension" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension azurerm_kubernetes_cluster_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtension;

KubernetesClusterExtension.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .extensionType(java.lang.String)
    .name(java.lang.String)
//  .configurationProtectedSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .configurationSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .plan(KubernetesClusterExtensionPlan)
//  .releaseNamespace(java.lang.String)
//  .releaseTrain(java.lang.String)
//  .targetNamespace(java.lang.String)
//  .timeouts(KubernetesClusterExtensionTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.extensionType">extensionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationProtectedSettings">configurationProtectedSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationSettings">configurationSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseNamespace">releaseNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseTrain">releaseTrain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.targetNamespace">targetNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}.

---

##### `extensionType`<sup>Required</sup> <a name="extensionType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.extensionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `configurationProtectedSettings`<sup>Optional</sup> <a name="configurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationProtectedSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}.

---

##### `configurationSettings`<sup>Optional</sup> <a name="configurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.configurationSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}

---

##### `releaseNamespace`<sup>Optional</sup> <a name="releaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}.

---

##### `releaseTrain`<sup>Optional</sup> <a name="releaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.releaseTrain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}.

---

##### `targetNamespace`<sup>Optional</sup> <a name="targetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.targetNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings">resetConfigurationProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings">resetConfigurationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace">resetReleaseNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain">resetReleaseTrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace">resetTargetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan"></a>

```java
public void putPlan(KubernetesClusterExtensionPlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts"></a>

```java
public void putTimeouts(KubernetesClusterExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---

##### `resetConfigurationProtectedSettings` <a name="resetConfigurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationProtectedSettings"></a>

```java
public void resetConfigurationProtectedSettings()
```

##### `resetConfigurationSettings` <a name="resetConfigurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetConfigurationSettings"></a>

```java
public void resetConfigurationSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetId"></a>

```java
public void resetId()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetReleaseNamespace` <a name="resetReleaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseNamespace"></a>

```java
public void resetReleaseNamespace()
```

##### `resetReleaseTrain` <a name="resetReleaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetReleaseTrain"></a>

```java
public void resetReleaseTrain()
```

##### `resetTargetNamespace` <a name="resetTargetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTargetNamespace"></a>

```java
public void resetTargetNamespace()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtension;

KubernetesClusterExtension.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtension;

KubernetesClusterExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtension;

KubernetesClusterExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtension;

KubernetesClusterExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesClusterExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesClusterExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesClusterExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesClusterExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity">aksAssignedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput">configurationProtectedSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput">configurationSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput">extensionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput">releaseNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput">releaseTrainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput">targetNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings">configurationProtectedSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings">configurationSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType">extensionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace">releaseNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain">releaseTrain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace">targetNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aksAssignedIdentity`<sup>Required</sup> <a name="aksAssignedIdentity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.aksAssignedIdentity"></a>

```java
public KubernetesClusterExtensionAksAssignedIdentityList getAksAssignedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList">KubernetesClusterExtensionAksAssignedIdentityList</a>

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.plan"></a>

```java
public KubernetesClusterExtensionPlanOutputReference getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference">KubernetesClusterExtensionPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeouts"></a>

```java
public KubernetesClusterExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference">KubernetesClusterExtensionTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `configurationProtectedSettingsInput`<sup>Optional</sup> <a name="configurationProtectedSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationProtectedSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configurationSettingsInput`<sup>Optional</sup> <a name="configurationSettingsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extensionTypeInput`<sup>Optional</sup> <a name="extensionTypeInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionTypeInput"></a>

```java
public java.lang.String getExtensionTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.planInput"></a>

```java
public KubernetesClusterExtensionPlan getPlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---

##### `releaseNamespaceInput`<sup>Optional</sup> <a name="releaseNamespaceInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespaceInput"></a>

```java
public java.lang.String getReleaseNamespaceInput();
```

- *Type:* java.lang.String

---

##### `releaseTrainInput`<sup>Optional</sup> <a name="releaseTrainInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrainInput"></a>

```java
public java.lang.String getReleaseTrainInput();
```

- *Type:* java.lang.String

---

##### `targetNamespaceInput`<sup>Optional</sup> <a name="targetNamespaceInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespaceInput"></a>

```java
public java.lang.String getTargetNamespaceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `configurationProtectedSettings`<sup>Required</sup> <a name="configurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationProtectedSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationProtectedSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configurationSettings`<sup>Required</sup> <a name="configurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.configurationSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extensionType`<sup>Required</sup> <a name="extensionType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.extensionType"></a>

```java
public java.lang.String getExtensionType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `releaseNamespace`<sup>Required</sup> <a name="releaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseNamespace"></a>

```java
public java.lang.String getReleaseNamespace();
```

- *Type:* java.lang.String

---

##### `releaseTrain`<sup>Required</sup> <a name="releaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.releaseTrain"></a>

```java
public java.lang.String getReleaseTrain();
```

- *Type:* java.lang.String

---

##### `targetNamespace`<sup>Required</sup> <a name="targetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.targetNamespace"></a>

```java
public java.lang.String getTargetNamespace();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterExtensionAksAssignedIdentity <a name="KubernetesClusterExtensionAksAssignedIdentity" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionAksAssignedIdentity;

KubernetesClusterExtensionAksAssignedIdentity.builder()
    .build();
```


### KubernetesClusterExtensionConfig <a name="KubernetesClusterExtensionConfig" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionConfig;

KubernetesClusterExtensionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .extensionType(java.lang.String)
    .name(java.lang.String)
//  .configurationProtectedSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .configurationSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .plan(KubernetesClusterExtensionPlan)
//  .releaseNamespace(java.lang.String)
//  .releaseTrain(java.lang.String)
//  .targetNamespace(java.lang.String)
//  .timeouts(KubernetesClusterExtensionTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType">extensionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings">configurationProtectedSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings">configurationSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace">releaseNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain">releaseTrain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace">targetNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}.

---

##### `extensionType`<sup>Required</sup> <a name="extensionType" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.extensionType"></a>

```java
public java.lang.String getExtensionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `configurationProtectedSettings`<sup>Optional</sup> <a name="configurationProtectedSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationProtectedSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationProtectedSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}.

---

##### `configurationSettings`<sup>Optional</sup> <a name="configurationSettings" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.configurationSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.plan"></a>

```java
public KubernetesClusterExtensionPlan getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}

---

##### `releaseNamespace`<sup>Optional</sup> <a name="releaseNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseNamespace"></a>

```java
public java.lang.String getReleaseNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}.

---

##### `releaseTrain`<sup>Optional</sup> <a name="releaseTrain" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.releaseTrain"></a>

```java
public java.lang.String getReleaseTrain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}.

---

##### `targetNamespace`<sup>Optional</sup> <a name="targetNamespace" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.targetNamespace"></a>

```java
public java.lang.String getTargetNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.timeouts"></a>

```java
public KubernetesClusterExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionPlan <a name="KubernetesClusterExtensionPlan" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionPlan;

KubernetesClusterExtensionPlan.builder()
    .name(java.lang.String)
    .product(java.lang.String)
    .publisher(java.lang.String)
//  .promotionCode(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode">promotionCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}.

---

##### `promotionCode`<sup>Optional</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.promotionCode"></a>

```java
public java.lang.String getPromotionCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}.

---

### KubernetesClusterExtensionTimeouts <a name="KubernetesClusterExtensionTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionTimeouts;

KubernetesClusterExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterExtensionAksAssignedIdentityList <a name="KubernetesClusterExtensionAksAssignedIdentityList" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionAksAssignedIdentityList;

new KubernetesClusterExtensionAksAssignedIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get"></a>

```java
public KubernetesClusterExtensionAksAssignedIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KubernetesClusterExtensionAksAssignedIdentityOutputReference <a name="KubernetesClusterExtensionAksAssignedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionAksAssignedIdentityOutputReference;

new KubernetesClusterExtensionAksAssignedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentityOutputReference.property.internalValue"></a>

```java
public KubernetesClusterExtensionAksAssignedIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionAksAssignedIdentity">KubernetesClusterExtensionAksAssignedIdentity</a>

---


### KubernetesClusterExtensionPlanOutputReference <a name="KubernetesClusterExtensionPlanOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionPlanOutputReference;

new KubernetesClusterExtensionPlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode">resetPromotionCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPromotionCode` <a name="resetPromotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetPromotionCode"></a>

```java
public void resetPromotionCode()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput">promotionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode">promotionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `promotionCodeInput`<sup>Optional</sup> <a name="promotionCodeInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCodeInput"></a>

```java
public java.lang.String getPromotionCodeInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `promotionCode`<sup>Required</sup> <a name="promotionCode" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.promotionCode"></a>

```java
public java.lang.String getPromotionCode();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlanOutputReference.property.internalValue"></a>

```java
public KubernetesClusterExtensionPlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionPlan">KubernetesClusterExtensionPlan</a>

---


### KubernetesClusterExtensionTimeoutsOutputReference <a name="KubernetesClusterExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kubernetes_cluster_extension.KubernetesClusterExtensionTimeoutsOutputReference;

new KubernetesClusterExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kubernetesClusterExtension.KubernetesClusterExtensionTimeouts">KubernetesClusterExtensionTimeouts</a>

---



