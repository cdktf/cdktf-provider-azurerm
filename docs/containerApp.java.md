# `containerApp` Submodule <a name="`containerApp` Submodule" id="@cdktf/provider-azurerm.containerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerApp <a name="ContainerApp" id="@cdktf/provider-azurerm.containerApp.ContainerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app azurerm_container_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerApp;

ContainerApp.Builder.create(Construct scope, java.lang.String id)
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
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .revisionMode(java.lang.String)
    .template(ContainerAppTemplate)
//  .dapr(ContainerAppDapr)
//  .id(java.lang.String)
//  .identity(ContainerAppIdentity)
//  .ingress(ContainerAppIngress)
//  .registry(IResolvable)
//  .registry(java.util.List<ContainerAppRegistry>)
//  .secret(IResolvable)
//  .secret(java.util.List<ContainerAppSecret>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The ID of the Container App Environment to host this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.revisionMode">revisionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | dapr block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#id ContainerApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>></code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#tags ContainerApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* java.lang.String

The ID of the Container App Environment to host this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#container_app_environment_id ContainerApp#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}.

---

##### `revisionMode`<sup>Required</sup> <a name="revisionMode" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.revisionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#template ContainerApp#template}

---

##### `dapr`<sup>Optional</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dapr"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

dapr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#dapr ContainerApp#dapr}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#id ContainerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.ingress"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#ingress ContainerApp#ingress}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.registry"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>>

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#registry ContainerApp#registry}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.secret"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret ContainerApp#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#tags ContainerApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#timeouts ContainerApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr">putDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry">putRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr">resetDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerApp.ContainerApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDapr` <a name="putDapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr"></a>

```java
public void putDapr(ContainerAppDapr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity"></a>

```java
public void putIdentity(ContainerAppIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress"></a>

```java
public void putIngress(ContainerAppIngress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---

##### `putRegistry` <a name="putRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry"></a>

```java
public void putRegistry(IResolvable OR java.util.List<ContainerAppRegistry> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<ContainerAppSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate"></a>

```java
public void putTemplate(ContainerAppTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts"></a>

```java
public void putTimeouts(ContainerAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---

##### `resetDapr` <a name="resetDapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr"></a>

```java
public void resetDapr()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry"></a>

```java
public void resetRegistry()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerApp;

ContainerApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerApp;

ContainerApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerApp;

ContainerApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerApp;

ContainerApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn">latestRevisionFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName">latestRevisionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput">daprInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput">registryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput">revisionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode">revisionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId"></a>

```java
public java.lang.String getCustomDomainVerificationId();
```

- *Type:* java.lang.String

---

##### `dapr`<sup>Required</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr"></a>

```java
public ContainerAppDaprOutputReference getDapr();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity"></a>

```java
public ContainerAppIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress"></a>

```java
public ContainerAppIngressOutputReference getIngress();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a>

---

##### `latestRevisionFqdn`<sup>Required</sup> <a name="latestRevisionFqdn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn"></a>

```java
public java.lang.String getLatestRevisionFqdn();
```

- *Type:* java.lang.String

---

##### `latestRevisionName`<sup>Required</sup> <a name="latestRevisionName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName"></a>

```java
public java.lang.String getLatestRevisionName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses"></a>

```java
public java.util.List<java.lang.String> getOutboundIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry"></a>

```java
public ContainerAppRegistryList getRegistry();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret"></a>

```java
public ContainerAppSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.template"></a>

```java
public ContainerAppTemplateOutputReference getTemplate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts"></a>

```java
public ContainerAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a>

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput"></a>

```java
public java.lang.String getContainerAppEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `daprInput`<sup>Optional</sup> <a name="daprInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput"></a>

```java
public ContainerAppDapr getDaprInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput"></a>

```java
public ContainerAppIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput"></a>

```java
public ContainerAppIngress getIngressInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput"></a>

```java
public java.lang.Object getRegistryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `revisionModeInput`<sup>Optional</sup> <a name="revisionModeInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput"></a>

```java
public java.lang.String getRevisionModeInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput"></a>

```java
public ContainerAppTemplate getTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `revisionMode`<sup>Required</sup> <a name="revisionMode" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode"></a>

```java
public java.lang.String getRevisionMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppConfig <a name="ContainerAppConfig" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppConfig;

ContainerAppConfig.builder()
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
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .revisionMode(java.lang.String)
    .template(ContainerAppTemplate)
//  .dapr(ContainerAppDapr)
//  .id(java.lang.String)
//  .identity(ContainerAppIdentity)
//  .ingress(ContainerAppIngress)
//  .registry(IResolvable)
//  .registry(java.util.List<ContainerAppRegistry>)
//  .secret(IResolvable)
//  .secret(java.util.List<ContainerAppSecret>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The ID of the Container App Environment to host this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode">revisionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | dapr block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#id ContainerApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>></code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#tags ContainerApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

The ID of the Container App Environment to host this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#container_app_environment_id ContainerApp#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}.

---

##### `revisionMode`<sup>Required</sup> <a name="revisionMode" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode"></a>

```java
public java.lang.String getRevisionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template"></a>

```java
public ContainerAppTemplate getTemplate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#template ContainerApp#template}

---

##### `dapr`<sup>Optional</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr"></a>

```java
public ContainerAppDapr getDapr();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

dapr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#dapr ContainerApp#dapr}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#id ContainerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity"></a>

```java
public ContainerAppIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress"></a>

```java
public ContainerAppIngress getIngress();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#ingress ContainerApp#ingress}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry"></a>

```java
public java.lang.Object getRegistry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>>

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#registry ContainerApp#registry}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret ContainerApp#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#tags ContainerApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts"></a>

```java
public ContainerAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#timeouts ContainerApp#timeouts}

---

### ContainerAppDapr <a name="ContainerAppDapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppDapr;

ContainerAppDapr.builder()
    .appId(java.lang.String)
//  .appPort(java.lang.Number)
//  .appProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId">appId</a></code> | <code>java.lang.String</code> | The Dapr Application Identifier. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort">appPort</a></code> | <code>java.lang.Number</code> | The port which the application is listening on. This is the same as the `ingress` port. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The Dapr Application Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#app_id ContainerApp#app_id}

---

##### `appPort`<sup>Optional</sup> <a name="appPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort"></a>

```java
public java.lang.Number getAppPort();
```

- *Type:* java.lang.Number

The port which the application is listening on. This is the same as the `ingress` port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#app_port ContainerApp#app_port}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#app_protocol ContainerApp#app_protocol}

---

### ContainerAppIdentity <a name="ContainerAppIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIdentity;

ContainerAppIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#type ContainerApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#type ContainerApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}.

---

### ContainerAppIngress <a name="ContainerAppIngress" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngress;

ContainerAppIngress.builder()
    .targetPort(java.lang.Number)
    .trafficWeight(IResolvable)
    .trafficWeight(java.util.List<ContainerAppIngressTrafficWeight>)
//  .allowInsecureConnections(java.lang.Boolean)
//  .allowInsecureConnections(IResolvable)
//  .customDomain(ContainerAppIngressCustomDomain)
//  .exposedPort(java.lang.Number)
//  .externalEnabled(java.lang.Boolean)
//  .externalEnabled(IResolvable)
//  .transport(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | The target port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight">trafficWeight</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>></code> | traffic_weight block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections">allowInsecureConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should this ingress allow insecure connections? |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort">exposedPort</a></code> | <code>java.lang.Number</code> | The exposed port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled">externalEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Is this an external Ingress. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport">transport</a></code> | <code>java.lang.String</code> | The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`. |

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

The target port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#target_port ContainerApp#target_port}

---

##### `trafficWeight`<sup>Required</sup> <a name="trafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight"></a>

```java
public java.lang.Object getTrafficWeight();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>>

traffic_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#traffic_weight ContainerApp#traffic_weight}

---

##### `allowInsecureConnections`<sup>Optional</sup> <a name="allowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections"></a>

```java
public java.lang.Object getAllowInsecureConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should this ingress allow insecure connections?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#allow_insecure_connections ContainerApp#allow_insecure_connections}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain"></a>

```java
public ContainerAppIngressCustomDomain getCustomDomain();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#custom_domain ContainerApp#custom_domain}

---

##### `exposedPort`<sup>Optional</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort"></a>

```java
public java.lang.Number getExposedPort();
```

- *Type:* java.lang.Number

The exposed port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#exposed_port ContainerApp#exposed_port}

---

##### `externalEnabled`<sup>Optional</sup> <a name="externalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled"></a>

```java
public java.lang.Object getExternalEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Is this an external Ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#external_enabled ContainerApp#external_enabled}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#transport ContainerApp#transport}

---

### ContainerAppIngressCustomDomain <a name="ContainerAppIngressCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressCustomDomain;

ContainerAppIngressCustomDomain.builder()
    .certificateId(java.lang.String)
    .name(java.lang.String)
//  .certificateBindingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | The hostname of the Certificate. Must be the CN or a named SAN in the certificate. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType">certificateBindingType</a></code> | <code>java.lang.String</code> | The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`. |

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The hostname of the Certificate. Must be the CN or a named SAN in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `certificateBindingType`<sup>Optional</sup> <a name="certificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType"></a>

```java
public java.lang.String getCertificateBindingType();
```

- *Type:* java.lang.String

The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#certificate_binding_type ContainerApp#certificate_binding_type}

---

### ContainerAppIngressTrafficWeight <a name="ContainerAppIngressTrafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressTrafficWeight;

ContainerAppIngressTrafficWeight.builder()
    .percentage(java.lang.Number)
//  .label(java.lang.String)
//  .latestRevision(java.lang.Boolean)
//  .latestRevision(IResolvable)
//  .revisionSuffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic to send to this revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label">label</a></code> | <code>java.lang.String</code> | The label to apply to the revision as a name prefix for routing traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision">latestRevision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This traffic Weight relates to the latest stable Container Revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix">revisionSuffix</a></code> | <code>java.lang.String</code> | The suffix string to append to the revision. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traffic to send to this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#percentage ContainerApp#percentage}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

The label to apply to the revision as a name prefix for routing traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#label ContainerApp#label}

---

##### `latestRevision`<sup>Optional</sup> <a name="latestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision"></a>

```java
public java.lang.Object getLatestRevision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This traffic Weight relates to the latest stable Container Revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#latest_revision ContainerApp#latest_revision}

---

##### `revisionSuffix`<sup>Optional</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix"></a>

```java
public java.lang.String getRevisionSuffix();
```

- *Type:* java.lang.String

The suffix string to append to the revision.

This must be unique for the Container App's lifetime. A default hash created by the service will be used if this value is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

### ContainerAppRegistry <a name="ContainerAppRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppRegistry;

ContainerAppRegistry.builder()
    .server(java.lang.String)
//  .identity(java.lang.String)
//  .passwordSecretName(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server">server</a></code> | <code>java.lang.String</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity">identity</a></code> | <code>java.lang.String</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName">passwordSecretName</a></code> | <code>java.lang.String</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username">username</a></code> | <code>java.lang.String</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#server ContainerApp#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `passwordSecretName`<sup>Optional</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName"></a>

```java
public java.lang.String getPasswordSecretName();
```

- *Type:* java.lang.String

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#password_secret_name ContainerApp#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#username ContainerApp#username}

---

### ContainerAppSecret <a name="ContainerAppSecret" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppSecret;

ContainerAppSecret.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name">name</a></code> | <code>java.lang.String</code> | The Secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value">value</a></code> | <code>java.lang.String</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplate <a name="ContainerAppTemplate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplate;

ContainerAppTemplate.builder()
    .container(IResolvable)
    .container(java.util.List<ContainerAppTemplateContainer>)
//  .azureQueueScaleRule(IResolvable)
//  .azureQueueScaleRule(java.util.List<ContainerAppTemplateAzureQueueScaleRule>)
//  .customScaleRule(IResolvable)
//  .customScaleRule(java.util.List<ContainerAppTemplateCustomScaleRule>)
//  .httpScaleRule(IResolvable)
//  .httpScaleRule(java.util.List<ContainerAppTemplateHttpScaleRule>)
//  .maxReplicas(java.lang.Number)
//  .minReplicas(java.lang.Number)
//  .revisionSuffix(java.lang.String)
//  .tcpScaleRule(IResolvable)
//  .tcpScaleRule(java.util.List<ContainerAppTemplateTcpScaleRule>)
//  .volume(IResolvable)
//  .volume(java.util.List<ContainerAppTemplateVolume>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container">container</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule">azureQueueScaleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>></code> | azure_queue_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule">customScaleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>></code> | custom_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule">httpScaleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>></code> | http_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | The maximum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | The minimum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix">revisionSuffix</a></code> | <code>java.lang.String</code> | The suffix for the revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule">tcpScaleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>></code> | tcp_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume">volume</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>></code> | volume block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#container ContainerApp#container}

---

##### `azureQueueScaleRule`<sup>Optional</sup> <a name="azureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule"></a>

```java
public java.lang.Object getAzureQueueScaleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>>

azure_queue_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#azure_queue_scale_rule ContainerApp#azure_queue_scale_rule}

---

##### `customScaleRule`<sup>Optional</sup> <a name="customScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule"></a>

```java
public java.lang.Object getCustomScaleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>>

custom_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#custom_scale_rule ContainerApp#custom_scale_rule}

---

##### `httpScaleRule`<sup>Optional</sup> <a name="httpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule"></a>

```java
public java.lang.Object getHttpScaleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>>

http_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#http_scale_rule ContainerApp#http_scale_rule}

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

The maximum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#max_replicas ContainerApp#max_replicas}

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

The minimum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#min_replicas ContainerApp#min_replicas}

---

##### `revisionSuffix`<sup>Optional</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix"></a>

```java
public java.lang.String getRevisionSuffix();
```

- *Type:* java.lang.String

The suffix for the revision.

This value must be unique for the lifetime of the Resource. If omitted the service will use a hash function to create one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

##### `tcpScaleRule`<sup>Optional</sup> <a name="tcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule"></a>

```java
public java.lang.Object getTcpScaleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>>

tcp_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#tcp_scale_rule ContainerApp#tcp_scale_rule}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume"></a>

```java
public java.lang.Object getVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#volume ContainerApp#volume}

---

### ContainerAppTemplateAzureQueueScaleRule <a name="ContainerAppTemplateAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRule;

ContainerAppTemplateAzureQueueScaleRule.builder()
    .authentication(IResolvable)
    .authentication(java.util.List<ContainerAppTemplateAzureQueueScaleRuleAuthentication>)
    .name(java.lang.String)
    .queueLength(java.lang.Number)
    .queueName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication">authentication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength">queueLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#queue_length ContainerApp#queue_length}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName">queueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#queue_name ContainerApp#queue_name}. |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication"></a>

```java
public java.lang.Object getAuthentication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `queueLength`<sup>Required</sup> <a name="queueLength" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength"></a>

```java
public java.lang.Number getQueueLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#queue_length ContainerApp#queue_length}.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#queue_name ContainerApp#queue_name}.

---

### ContainerAppTemplateAzureQueueScaleRuleAuthentication <a name="ContainerAppTemplateAzureQueueScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRuleAuthentication;

ContainerAppTemplateAzureQueueScaleRuleAuthentication.builder()
    .secretName(java.lang.String)
    .triggerParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateContainer <a name="ContainerAppTemplateContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainer;

ContainerAppTemplateContainer.builder()
    .cpu(java.lang.Number)
    .image(java.lang.String)
    .memory(java.lang.String)
    .name(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(IResolvable)
//  .env(java.util.List<ContainerAppTemplateContainerEnv>)
//  .livenessProbe(IResolvable)
//  .livenessProbe(java.util.List<ContainerAppTemplateContainerLivenessProbe>)
//  .readinessProbe(IResolvable)
//  .readinessProbe(java.util.List<ContainerAppTemplateContainerReadinessProbe>)
//  .startupProbe(IResolvable)
//  .startupProbe(java.util.List<ContainerAppTemplateContainerStartupProbe>)
//  .volumeMounts(IResolvable)
//  .volumeMounts(java.util.List<ContainerAppTemplateContainerVolumeMounts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image">image</a></code> | <code>java.lang.String</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory">memory</a></code> | <code>java.lang.String</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name">name</a></code> | <code>java.lang.String</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env">env</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>></code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe">livenessProbe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe">readinessProbe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>></code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe">startupProbe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts">volumeMounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>></code> | volume_mounts block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#cpu ContainerApp#cpu}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#image ContainerApp#image}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#memory ContainerApp#memory}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#args ContainerApp#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#command ContainerApp#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env"></a>

```java
public java.lang.Object getEnv();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#env ContainerApp#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe"></a>

```java
public java.lang.Object getLivenessProbe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#liveness_probe ContainerApp#liveness_probe}

---

##### `readinessProbe`<sup>Optional</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe"></a>

```java
public java.lang.Object getReadinessProbe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>>

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#readiness_probe ContainerApp#readiness_probe}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe"></a>

```java
public java.lang.Object getStartupProbe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#startup_probe ContainerApp#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts"></a>

```java
public java.lang.Object getVolumeMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>>

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#volume_mounts ContainerApp#volume_mounts}

---

### ContainerAppTemplateContainerEnv <a name="ContainerAppTemplateContainerEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerEnv;

ContainerAppTemplateContainerEnv.builder()
    .name(java.lang.String)
//  .secretName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value">value</a></code> | <code>java.lang.String</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerLivenessProbe <a name="ContainerAppTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbe;

ContainerAppTemplateContainerLivenessProbe.builder()
    .port(java.lang.Number)
    .transport(java.lang.String)
//  .failureCountThreshold(java.lang.Number)
//  .header(IResolvable)
//  .header(java.util.List<ContainerAppTemplateContainerLivenessProbeHeader>)
//  .host(java.lang.String)
//  .initialDelay(java.lang.Number)
//  .intervalSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport">transport</a></code> | <code>java.lang.String</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host">host</a></code> | <code>java.lang.String</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay">initialDelay</a></code> | <code>java.lang.Number</code> | The time in seconds to wait after the container has started before the probe is started. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path">path</a></code> | <code>java.lang.String</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#host ContainerApp#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay"></a>

```java
public java.lang.Number getInitialDelay();
```

- *Type:* java.lang.Number

The time in seconds to wait after the container has started before the probe is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#initial_delay ContainerApp#initial_delay}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerLivenessProbeHeader <a name="ContainerAppTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbeHeader;

ContainerAppTemplateContainerLivenessProbeHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name">name</a></code> | <code>java.lang.String</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value">value</a></code> | <code>java.lang.String</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerReadinessProbe <a name="ContainerAppTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbe;

ContainerAppTemplateContainerReadinessProbe.builder()
    .port(java.lang.Number)
    .transport(java.lang.String)
//  .failureCountThreshold(java.lang.Number)
//  .header(IResolvable)
//  .header(java.util.List<ContainerAppTemplateContainerReadinessProbeHeader>)
//  .host(java.lang.String)
//  .intervalSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .successCountThreshold(java.lang.Number)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport">transport</a></code> | <code>java.lang.String</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host">host</a></code> | <code>java.lang.String</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path">path</a></code> | <code>java.lang.String</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold">successCountThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#host ContainerApp#host}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#path ContainerApp#path}

---

##### `successCountThreshold`<sup>Optional</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```java
public java.lang.Number getSuccessCountThreshold();
```

- *Type:* java.lang.Number

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#success_count_threshold ContainerApp#success_count_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerReadinessProbeHeader <a name="ContainerAppTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbeHeader;

ContainerAppTemplateContainerReadinessProbeHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name">name</a></code> | <code>java.lang.String</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value">value</a></code> | <code>java.lang.String</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerStartupProbe <a name="ContainerAppTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbe;

ContainerAppTemplateContainerStartupProbe.builder()
    .port(java.lang.Number)
    .transport(java.lang.String)
//  .failureCountThreshold(java.lang.Number)
//  .header(IResolvable)
//  .header(java.util.List<ContainerAppTemplateContainerStartupProbeHeader>)
//  .host(java.lang.String)
//  .intervalSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport">transport</a></code> | <code>java.lang.String</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host">host</a></code> | <code>java.lang.String</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path">path</a></code> | <code>java.lang.String</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failureCountThreshold`<sup>Optional</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#host ContainerApp#host}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerStartupProbeHeader <a name="ContainerAppTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbeHeader;

ContainerAppTemplateContainerStartupProbeHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name">name</a></code> | <code>java.lang.String</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value">value</a></code> | <code>java.lang.String</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerVolumeMounts <a name="ContainerAppTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerVolumeMounts;

ContainerAppTemplateContainerVolumeMounts.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path">path</a></code> | <code>java.lang.String</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#path ContainerApp#path}

---

### ContainerAppTemplateCustomScaleRule <a name="ContainerAppTemplateCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRule;

ContainerAppTemplateCustomScaleRule.builder()
    .customRuleType(java.lang.String)
    .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .name(java.lang.String)
//  .authentication(IResolvable)
//  .authentication(java.util.List<ContainerAppTemplateCustomScaleRuleAuthentication>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType">customRuleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#metadata ContainerApp#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication">authentication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>></code> | authentication block. |

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType"></a>

```java
public java.lang.String getCustomRuleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#metadata ContainerApp#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication"></a>

```java
public java.lang.Object getAuthentication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateCustomScaleRuleAuthentication <a name="ContainerAppTemplateCustomScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRuleAuthentication;

ContainerAppTemplateCustomScaleRuleAuthentication.builder()
    .secretName(java.lang.String)
    .triggerParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateHttpScaleRule <a name="ContainerAppTemplateHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRule;

ContainerAppTemplateHttpScaleRule.builder()
    .concurrentRequests(java.lang.String)
    .name(java.lang.String)
//  .authentication(IResolvable)
//  .authentication(java.util.List<ContainerAppTemplateHttpScaleRuleAuthentication>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests">concurrentRequests</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication">authentication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>></code> | authentication block. |

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests"></a>

```java
public java.lang.String getConcurrentRequests();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication"></a>

```java
public java.lang.Object getAuthentication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateHttpScaleRuleAuthentication <a name="ContainerAppTemplateHttpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRuleAuthentication;

ContainerAppTemplateHttpScaleRuleAuthentication.builder()
    .secretName(java.lang.String)
//  .triggerParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Optional</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateTcpScaleRule <a name="ContainerAppTemplateTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRule;

ContainerAppTemplateTcpScaleRule.builder()
    .concurrentRequests(java.lang.String)
    .name(java.lang.String)
//  .authentication(IResolvable)
//  .authentication(java.util.List<ContainerAppTemplateTcpScaleRuleAuthentication>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests">concurrentRequests</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication">authentication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>></code> | authentication block. |

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests"></a>

```java
public java.lang.String getConcurrentRequests();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication"></a>

```java
public java.lang.Object getAuthentication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateTcpScaleRuleAuthentication <a name="ContainerAppTemplateTcpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRuleAuthentication;

ContainerAppTemplateTcpScaleRuleAuthentication.builder()
    .secretName(java.lang.String)
//  .triggerParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `triggerParameter`<sup>Optional</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateVolume <a name="ContainerAppTemplateVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateVolume;

ContainerAppTemplateVolume.builder()
    .name(java.lang.String)
//  .storageName(java.lang.String)
//  .storageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name">name</a></code> | <code>java.lang.String</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName">storageName</a></code> | <code>java.lang.String</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType">storageType</a></code> | <code>java.lang.String</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#name ContainerApp#name}

---

##### `storageName`<sup>Optional</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName"></a>

```java
public java.lang.String getStorageName();
```

- *Type:* java.lang.String

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#storage_name ContainerApp#storage_name}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#storage_type ContainerApp#storage_type}

---

### ContainerAppTimeouts <a name="ContainerAppTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTimeouts;

ContainerAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#create ContainerApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#delete ContainerApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#read ContainerApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#update ContainerApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#create ContainerApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#delete ContainerApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#read ContainerApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/container_app#update ContainerApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppDaprOutputReference <a name="ContainerAppDaprOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppDaprOutputReference;

new ContainerAppDaprOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort">resetAppPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol">resetAppProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppPort` <a name="resetAppPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort"></a>

```java
public void resetAppPort()
```

##### `resetAppProtocol` <a name="resetAppProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol"></a>

```java
public void resetAppProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput">appPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput">appProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort">appPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `appPortInput`<sup>Optional</sup> <a name="appPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput"></a>

```java
public java.lang.Number getAppPortInput();
```

- *Type:* java.lang.Number

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput"></a>

```java
public java.lang.String getAppProtocolInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appPort`<sup>Required</sup> <a name="appPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort"></a>

```java
public java.lang.Number getAppPort();
```

- *Type:* java.lang.Number

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue"></a>

```java
public ContainerAppDapr getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---


### ContainerAppIdentityOutputReference <a name="ContainerAppIdentityOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIdentityOutputReference;

new ContainerAppIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue"></a>

```java
public ContainerAppIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---


### ContainerAppIngressCustomDomainOutputReference <a name="ContainerAppIngressCustomDomainOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressCustomDomainOutputReference;

new ContainerAppIngressCustomDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType">resetCertificateBindingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateBindingType` <a name="resetCertificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType"></a>

```java
public void resetCertificateBindingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput">certificateBindingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType">certificateBindingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateBindingTypeInput`<sup>Optional</sup> <a name="certificateBindingTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput"></a>

```java
public java.lang.String getCertificateBindingTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `certificateBindingType`<sup>Required</sup> <a name="certificateBindingType" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType"></a>

```java
public java.lang.String getCertificateBindingType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue"></a>

```java
public ContainerAppIngressCustomDomain getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---


### ContainerAppIngressOutputReference <a name="ContainerAppIngressOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressOutputReference;

new ContainerAppIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight">putTrafficWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections">resetAllowInsecureConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort">resetExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled">resetExternalEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain"></a>

```java
public void putCustomDomain(ContainerAppIngressCustomDomain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---

##### `putTrafficWeight` <a name="putTrafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight"></a>

```java
public void putTrafficWeight(IResolvable OR java.util.List<ContainerAppIngressTrafficWeight> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>>

---

##### `resetAllowInsecureConnections` <a name="resetAllowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections"></a>

```java
public void resetAllowInsecureConnections()
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain"></a>

```java
public void resetCustomDomain()
```

##### `resetExposedPort` <a name="resetExposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort"></a>

```java
public void resetExposedPort()
```

##### `resetExternalEnabled` <a name="resetExternalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled"></a>

```java
public void resetExternalEnabled()
```

##### `resetTransport` <a name="resetTransport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport"></a>

```java
public void resetTransport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight">trafficWeight</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput">allowInsecureConnectionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput">exposedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput">externalEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput">trafficWeightInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput">transportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections">allowInsecureConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort">exposedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled">externalEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain"></a>

```java
public ContainerAppIngressCustomDomainOutputReference getCustomDomain();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `trafficWeight`<sup>Required</sup> <a name="trafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight"></a>

```java
public ContainerAppIngressTrafficWeightList getTrafficWeight();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a>

---

##### `allowInsecureConnectionsInput`<sup>Optional</sup> <a name="allowInsecureConnectionsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput"></a>

```java
public java.lang.Object getAllowInsecureConnectionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput"></a>

```java
public ContainerAppIngressCustomDomain getCustomDomainInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---

##### `exposedPortInput`<sup>Optional</sup> <a name="exposedPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput"></a>

```java
public java.lang.Number getExposedPortInput();
```

- *Type:* java.lang.Number

---

##### `externalEnabledInput`<sup>Optional</sup> <a name="externalEnabledInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput"></a>

```java
public java.lang.Object getExternalEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput"></a>

```java
public java.lang.Number getTargetPortInput();
```

- *Type:* java.lang.Number

---

##### `trafficWeightInput`<sup>Optional</sup> <a name="trafficWeightInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput"></a>

```java
public java.lang.Object getTrafficWeightInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>>

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput"></a>

```java
public java.lang.String getTransportInput();
```

- *Type:* java.lang.String

---

##### `allowInsecureConnections`<sup>Required</sup> <a name="allowInsecureConnections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections"></a>

```java
public java.lang.Object getAllowInsecureConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposedPort`<sup>Required</sup> <a name="exposedPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort"></a>

```java
public java.lang.Number getExposedPort();
```

- *Type:* java.lang.Number

---

##### `externalEnabled`<sup>Required</sup> <a name="externalEnabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled"></a>

```java
public java.lang.Object getExternalEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue"></a>

```java
public ContainerAppIngress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---


### ContainerAppIngressTrafficWeightList <a name="ContainerAppIngressTrafficWeightList" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressTrafficWeightList;

new ContainerAppIngressTrafficWeightList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get"></a>

```java
public ContainerAppIngressTrafficWeightOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>>

---


### ContainerAppIngressTrafficWeightOutputReference <a name="ContainerAppIngressTrafficWeightOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppIngressTrafficWeightOutputReference;

new ContainerAppIngressTrafficWeightOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision">resetLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix">resetRevisionSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetLatestRevision` <a name="resetLatestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision"></a>

```java
public void resetLatestRevision()
```

##### `resetRevisionSuffix` <a name="resetRevisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix"></a>

```java
public void resetRevisionSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput">latestRevisionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput">revisionSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision">latestRevision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix">revisionSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `latestRevisionInput`<sup>Optional</sup> <a name="latestRevisionInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput"></a>

```java
public java.lang.Object getLatestRevisionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `revisionSuffixInput`<sup>Optional</sup> <a name="revisionSuffixInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput"></a>

```java
public java.lang.String getRevisionSuffixInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision"></a>

```java
public java.lang.Object getLatestRevision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `revisionSuffix`<sup>Required</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix"></a>

```java
public java.lang.String getRevisionSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>

---


### ContainerAppRegistryList <a name="ContainerAppRegistryList" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppRegistryList;

new ContainerAppRegistryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get"></a>

```java
public ContainerAppRegistryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>>

---


### ContainerAppRegistryOutputReference <a name="ContainerAppRegistryOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppRegistryOutputReference;

new ContainerAppRegistryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName">resetPasswordSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetPasswordSecretName` <a name="resetPasswordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName"></a>

```java
public void resetPasswordSecretName()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput">passwordSecretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName">passwordSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretNameInput`<sup>Optional</sup> <a name="passwordSecretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput"></a>

```java
public java.lang.String getPasswordSecretNameInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `passwordSecretName`<sup>Required</sup> <a name="passwordSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName"></a>

```java
public java.lang.String getPasswordSecretName();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>

---


### ContainerAppSecretList <a name="ContainerAppSecretList" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppSecretList;

new ContainerAppSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get"></a>

```java
public ContainerAppSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>>

---


### ContainerAppSecretOutputReference <a name="ContainerAppSecretOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppSecretOutputReference;

new ContainerAppSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationList <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList;

new ContainerAppTemplateAzureQueueScaleRuleAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get"></a>

```java
public ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>>

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference;

new ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```java
public java.lang.String getTriggerParameterInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>

---


### ContainerAppTemplateAzureQueueScaleRuleList <a name="ContainerAppTemplateAzureQueueScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRuleList;

new ContainerAppTemplateAzureQueueScaleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get"></a>

```java
public ContainerAppTemplateAzureQueueScaleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>>

---


### ContainerAppTemplateAzureQueueScaleRuleOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateAzureQueueScaleRuleOutputReference;

new ContainerAppTemplateAzureQueueScaleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication"></a>

```java
public void putAuthentication(IResolvable OR java.util.List<ContainerAppTemplateAzureQueueScaleRuleAuthentication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput">queueLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength">queueLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication"></a>

```java
public ContainerAppTemplateAzureQueueScaleRuleAuthenticationList getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput"></a>

```java
public java.lang.Object getAuthenticationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queueLengthInput`<sup>Optional</sup> <a name="queueLengthInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput"></a>

```java
public java.lang.Number getQueueLengthInput();
```

- *Type:* java.lang.Number

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queueLength`<sup>Required</sup> <a name="queueLength" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength"></a>

```java
public java.lang.Number getQueueLength();
```

- *Type:* java.lang.Number

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>

---


### ContainerAppTemplateContainerEnvList <a name="ContainerAppTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerEnvList;

new ContainerAppTemplateContainerEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get"></a>

```java
public ContainerAppTemplateContainerEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>>

---


### ContainerAppTemplateContainerEnvOutputReference <a name="ContainerAppTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerEnvOutputReference;

new ContainerAppTemplateContainerEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>

---


### ContainerAppTemplateContainerList <a name="ContainerAppTemplateContainerList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerList;

new ContainerAppTemplateContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get"></a>

```java
public ContainerAppTemplateContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>>

---


### ContainerAppTemplateContainerLivenessProbeHeaderList <a name="ContainerAppTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbeHeaderList;

new ContainerAppTemplateContainerLivenessProbeHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get"></a>

```java
public ContainerAppTemplateContainerLivenessProbeHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>>

---


### ContainerAppTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference;

new ContainerAppTemplateContainerLivenessProbeHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>

---


### ContainerAppTemplateContainerLivenessProbeList <a name="ContainerAppTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbeList;

new ContainerAppTemplateContainerLivenessProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get"></a>

```java
public ContainerAppTemplateContainerLivenessProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>>

---


### ContainerAppTemplateContainerLivenessProbeOutputReference <a name="ContainerAppTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerLivenessProbeOutputReference;

new ContainerAppTemplateContainerLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ContainerAppTemplateContainerLivenessProbeHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>>

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```java
public void resetFailureCountThreshold()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```java
public void resetInitialDelay()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay">initialDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header"></a>

```java
public ContainerAppTemplateContainerLivenessProbeHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```java
public java.lang.Number getTerminationGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```java
public java.lang.Number getFailureCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```java
public java.lang.Number getInitialDelayInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```java
public java.lang.String getTransportInput();
```

- *Type:* java.lang.String

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```java
public java.lang.Number getInitialDelay();
```

- *Type:* java.lang.Number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>

---


### ContainerAppTemplateContainerOutputReference <a name="ContainerAppTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerOutputReference;

new ContainerAppTemplateContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe">putReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe">resetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable OR java.util.List<ContainerAppTemplateContainerEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>>

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe"></a>

```java
public void putLivenessProbe(IResolvable OR java.util.List<ContainerAppTemplateContainerLivenessProbe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>>

---

##### `putReadinessProbe` <a name="putReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe"></a>

```java
public void putReadinessProbe(IResolvable OR java.util.List<ContainerAppTemplateContainerReadinessProbe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe"></a>

```java
public void putStartupProbe(IResolvable OR java.util.List<ContainerAppTemplateContainerStartupProbe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts"></a>

```java
public void putVolumeMounts(IResolvable OR java.util.List<ContainerAppTemplateContainerVolumeMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe"></a>

```java
public void resetLivenessProbe()
```

##### `resetReadinessProbe` <a name="resetReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe"></a>

```java
public void resetReadinessProbe()
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe"></a>

```java
public void resetStartupProbe()
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts"></a>

```java
public void resetVolumeMounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe">readinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput">envInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput">readinessProbeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env"></a>

```java
public ContainerAppTemplateContainerEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage"></a>

```java
public java.lang.String getEphemeralStorage();
```

- *Type:* java.lang.String

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe"></a>

```java
public ContainerAppTemplateContainerLivenessProbeList getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a>

---

##### `readinessProbe`<sup>Required</sup> <a name="readinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe"></a>

```java
public ContainerAppTemplateContainerReadinessProbeList getReadinessProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe"></a>

```java
public ContainerAppTemplateContainerStartupProbeList getStartupProbe();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts"></a>

```java
public ContainerAppTemplateContainerVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput"></a>

```java
public java.lang.Object getEnvInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput"></a>

```java
public java.lang.Object getLivenessProbeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readinessProbeInput`<sup>Optional</sup> <a name="readinessProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput"></a>

```java
public java.lang.Object getReadinessProbeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput"></a>

```java
public java.lang.Object getStartupProbeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput"></a>

```java
public java.lang.Object getVolumeMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>

---


### ContainerAppTemplateContainerReadinessProbeHeaderList <a name="ContainerAppTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbeHeaderList;

new ContainerAppTemplateContainerReadinessProbeHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get"></a>

```java
public ContainerAppTemplateContainerReadinessProbeHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>>

---


### ContainerAppTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference;

new ContainerAppTemplateContainerReadinessProbeHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>

---


### ContainerAppTemplateContainerReadinessProbeList <a name="ContainerAppTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbeList;

new ContainerAppTemplateContainerReadinessProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get"></a>

```java
public ContainerAppTemplateContainerReadinessProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>>

---


### ContainerAppTemplateContainerReadinessProbeOutputReference <a name="ContainerAppTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerReadinessProbeOutputReference;

new ContainerAppTemplateContainerReadinessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">resetSuccessCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ContainerAppTemplateContainerReadinessProbeHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>>

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```java
public void resetFailureCountThreshold()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSuccessCountThreshold` <a name="resetSuccessCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```java
public void resetSuccessCountThreshold()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">successCountThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput">transportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">successCountThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header"></a>

```java
public ContainerAppTemplateContainerReadinessProbeHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a>

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```java
public java.lang.Number getFailureCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `successCountThresholdInput`<sup>Optional</sup> <a name="successCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```java
public java.lang.Number getSuccessCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```java
public java.lang.String getTransportInput();
```

- *Type:* java.lang.String

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `successCountThreshold`<sup>Required</sup> <a name="successCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```java
public java.lang.Number getSuccessCountThreshold();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>

---


### ContainerAppTemplateContainerStartupProbeHeaderList <a name="ContainerAppTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbeHeaderList;

new ContainerAppTemplateContainerStartupProbeHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get"></a>

```java
public ContainerAppTemplateContainerStartupProbeHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>>

---


### ContainerAppTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbeHeaderOutputReference;

new ContainerAppTemplateContainerStartupProbeHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>

---


### ContainerAppTemplateContainerStartupProbeList <a name="ContainerAppTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbeList;

new ContainerAppTemplateContainerStartupProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get"></a>

```java
public ContainerAppTemplateContainerStartupProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>>

---


### ContainerAppTemplateContainerStartupProbeOutputReference <a name="ContainerAppTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerStartupProbeOutputReference;

new ContainerAppTemplateContainerStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">resetFailureCountThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ContainerAppTemplateContainerStartupProbeHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>>

---

##### `resetFailureCountThreshold` <a name="resetFailureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```java
public void resetFailureCountThreshold()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">terminationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">failureCountThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput">transportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">failureCountThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header"></a>

```java
public ContainerAppTemplateContainerStartupProbeHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a>

---

##### `terminationGracePeriodSeconds`<sup>Required</sup> <a name="terminationGracePeriodSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```java
public java.lang.Number getTerminationGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `failureCountThresholdInput`<sup>Optional</sup> <a name="failureCountThresholdInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```java
public java.lang.Number getFailureCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```java
public java.lang.String getTransportInput();
```

- *Type:* java.lang.String

---

##### `failureCountThreshold`<sup>Required</sup> <a name="failureCountThreshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```java
public java.lang.Number getFailureCountThreshold();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>

---


### ContainerAppTemplateContainerVolumeMountsList <a name="ContainerAppTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerVolumeMountsList;

new ContainerAppTemplateContainerVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get"></a>

```java
public ContainerAppTemplateContainerVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>>

---


### ContainerAppTemplateContainerVolumeMountsOutputReference <a name="ContainerAppTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateContainerVolumeMountsOutputReference;

new ContainerAppTemplateContainerVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>

---


### ContainerAppTemplateCustomScaleRuleAuthenticationList <a name="ContainerAppTemplateCustomScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRuleAuthenticationList;

new ContainerAppTemplateCustomScaleRuleAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get"></a>

```java
public ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>>

---


### ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference;

new ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```java
public java.lang.String getTriggerParameterInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>

---


### ContainerAppTemplateCustomScaleRuleList <a name="ContainerAppTemplateCustomScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRuleList;

new ContainerAppTemplateCustomScaleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get"></a>

```java
public ContainerAppTemplateCustomScaleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>>

---


### ContainerAppTemplateCustomScaleRuleOutputReference <a name="ContainerAppTemplateCustomScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateCustomScaleRuleOutputReference;

new ContainerAppTemplateCustomScaleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication"></a>

```java
public void putAuthentication(IResolvable OR java.util.List<ContainerAppTemplateCustomScaleRuleAuthentication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput">customRuleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType">customRuleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication"></a>

```java
public ContainerAppTemplateCustomScaleRuleAuthenticationList getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput"></a>

```java
public java.lang.Object getAuthenticationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>>

---

##### `customRuleTypeInput`<sup>Optional</sup> <a name="customRuleTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput"></a>

```java
public java.lang.String getCustomRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `customRuleType`<sup>Required</sup> <a name="customRuleType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType"></a>

```java
public java.lang.String getCustomRuleType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>

---


### ContainerAppTemplateHttpScaleRuleAuthenticationList <a name="ContainerAppTemplateHttpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRuleAuthenticationList;

new ContainerAppTemplateHttpScaleRuleAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get"></a>

```java
public ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>>

---


### ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference;

new ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter">resetTriggerParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTriggerParameter` <a name="resetTriggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```java
public void resetTriggerParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```java
public java.lang.String getTriggerParameterInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>

---


### ContainerAppTemplateHttpScaleRuleList <a name="ContainerAppTemplateHttpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRuleList;

new ContainerAppTemplateHttpScaleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get"></a>

```java
public ContainerAppTemplateHttpScaleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>>

---


### ContainerAppTemplateHttpScaleRuleOutputReference <a name="ContainerAppTemplateHttpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateHttpScaleRuleOutputReference;

new ContainerAppTemplateHttpScaleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication"></a>

```java
public void putAuthentication(IResolvable OR java.util.List<ContainerAppTemplateHttpScaleRuleAuthentication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput">concurrentRequestsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests">concurrentRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication"></a>

```java
public ContainerAppTemplateHttpScaleRuleAuthenticationList getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput"></a>

```java
public java.lang.Object getAuthenticationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>>

---

##### `concurrentRequestsInput`<sup>Optional</sup> <a name="concurrentRequestsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```java
public java.lang.String getConcurrentRequestsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests"></a>

```java
public java.lang.String getConcurrentRequests();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>

---


### ContainerAppTemplateOutputReference <a name="ContainerAppTemplateOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateOutputReference;

new ContainerAppTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule">putAzureQueueScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule">putCustomScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule">putHttpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule">putTcpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule">resetAzureQueueScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule">resetCustomScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule">resetHttpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas">resetMaxReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas">resetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix">resetRevisionSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule">resetTcpScaleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureQueueScaleRule` <a name="putAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule"></a>

```java
public void putAzureQueueScaleRule(IResolvable OR java.util.List<ContainerAppTemplateAzureQueueScaleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>>

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer"></a>

```java
public void putContainer(IResolvable OR java.util.List<ContainerAppTemplateContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>>

---

##### `putCustomScaleRule` <a name="putCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule"></a>

```java
public void putCustomScaleRule(IResolvable OR java.util.List<ContainerAppTemplateCustomScaleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>>

---

##### `putHttpScaleRule` <a name="putHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule"></a>

```java
public void putHttpScaleRule(IResolvable OR java.util.List<ContainerAppTemplateHttpScaleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>>

---

##### `putTcpScaleRule` <a name="putTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule"></a>

```java
public void putTcpScaleRule(IResolvable OR java.util.List<ContainerAppTemplateTcpScaleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume"></a>

```java
public void putVolume(IResolvable OR java.util.List<ContainerAppTemplateVolume> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>>

---

##### `resetAzureQueueScaleRule` <a name="resetAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule"></a>

```java
public void resetAzureQueueScaleRule()
```

##### `resetCustomScaleRule` <a name="resetCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule"></a>

```java
public void resetCustomScaleRule()
```

##### `resetHttpScaleRule` <a name="resetHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule"></a>

```java
public void resetHttpScaleRule()
```

##### `resetMaxReplicas` <a name="resetMaxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas"></a>

```java
public void resetMaxReplicas()
```

##### `resetMinReplicas` <a name="resetMinReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas"></a>

```java
public void resetMinReplicas()
```

##### `resetRevisionSuffix` <a name="resetRevisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix"></a>

```java
public void resetRevisionSuffix()
```

##### `resetTcpScaleRule` <a name="resetTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule"></a>

```java
public void resetTcpScaleRule()
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume"></a>

```java
public void resetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule">azureQueueScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule">customScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule">httpScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule">tcpScaleRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput">azureQueueScaleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput">containerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput">customScaleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput">httpScaleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput">revisionSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput">tcpScaleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput">volumeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix">revisionSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureQueueScaleRule`<sup>Required</sup> <a name="azureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule"></a>

```java
public ContainerAppTemplateAzureQueueScaleRuleList getAzureQueueScaleRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container"></a>

```java
public ContainerAppTemplateContainerList getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a>

---

##### `customScaleRule`<sup>Required</sup> <a name="customScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule"></a>

```java
public ContainerAppTemplateCustomScaleRuleList getCustomScaleRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a>

---

##### `httpScaleRule`<sup>Required</sup> <a name="httpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule"></a>

```java
public ContainerAppTemplateHttpScaleRuleList getHttpScaleRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a>

---

##### `tcpScaleRule`<sup>Required</sup> <a name="tcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule"></a>

```java
public ContainerAppTemplateTcpScaleRuleList getTcpScaleRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume"></a>

```java
public ContainerAppTemplateVolumeList getVolume();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a>

---

##### `azureQueueScaleRuleInput`<sup>Optional</sup> <a name="azureQueueScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput"></a>

```java
public java.lang.Object getAzureQueueScaleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput"></a>

```java
public java.lang.Object getContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>>

---

##### `customScaleRuleInput`<sup>Optional</sup> <a name="customScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput"></a>

```java
public java.lang.Object getCustomScaleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>>

---

##### `httpScaleRuleInput`<sup>Optional</sup> <a name="httpScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput"></a>

```java
public java.lang.Object getHttpScaleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `revisionSuffixInput`<sup>Optional</sup> <a name="revisionSuffixInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput"></a>

```java
public java.lang.String getRevisionSuffixInput();
```

- *Type:* java.lang.String

---

##### `tcpScaleRuleInput`<sup>Optional</sup> <a name="tcpScaleRuleInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput"></a>

```java
public java.lang.Object getTcpScaleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput"></a>

```java
public java.lang.Object getVolumeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>>

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `revisionSuffix`<sup>Required</sup> <a name="revisionSuffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix"></a>

```java
public java.lang.String getRevisionSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue"></a>

```java
public ContainerAppTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---


### ContainerAppTemplateTcpScaleRuleAuthenticationList <a name="ContainerAppTemplateTcpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRuleAuthenticationList;

new ContainerAppTemplateTcpScaleRuleAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get"></a>

```java
public ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>>

---


### ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference;

new ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter">resetTriggerParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTriggerParameter` <a name="resetTriggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```java
public void resetTriggerParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">triggerParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter">triggerParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `triggerParameterInput`<sup>Optional</sup> <a name="triggerParameterInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```java
public java.lang.String getTriggerParameterInput();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `triggerParameter`<sup>Required</sup> <a name="triggerParameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```java
public java.lang.String getTriggerParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>

---


### ContainerAppTemplateTcpScaleRuleList <a name="ContainerAppTemplateTcpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRuleList;

new ContainerAppTemplateTcpScaleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get"></a>

```java
public ContainerAppTemplateTcpScaleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>>

---


### ContainerAppTemplateTcpScaleRuleOutputReference <a name="ContainerAppTemplateTcpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateTcpScaleRuleOutputReference;

new ContainerAppTemplateTcpScaleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication"></a>

```java
public void putAuthentication(IResolvable OR java.util.List<ContainerAppTemplateTcpScaleRuleAuthentication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput">concurrentRequestsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests">concurrentRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication"></a>

```java
public ContainerAppTemplateTcpScaleRuleAuthenticationList getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput"></a>

```java
public java.lang.Object getAuthenticationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>>

---

##### `concurrentRequestsInput`<sup>Optional</sup> <a name="concurrentRequestsInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```java
public java.lang.String getConcurrentRequestsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `concurrentRequests`<sup>Required</sup> <a name="concurrentRequests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests"></a>

```java
public java.lang.String getConcurrentRequests();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>

---


### ContainerAppTemplateVolumeList <a name="ContainerAppTemplateVolumeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateVolumeList;

new ContainerAppTemplateVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get"></a>

```java
public ContainerAppTemplateVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>>

---


### ContainerAppTemplateVolumeOutputReference <a name="ContainerAppTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTemplateVolumeOutputReference;

new ContainerAppTemplateVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName">resetStorageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageName` <a name="resetStorageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName"></a>

```java
public void resetStorageName()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType"></a>

```java
public void resetStorageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput">storageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName">storageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageNameInput`<sup>Optional</sup> <a name="storageNameInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput"></a>

```java
public java.lang.String getStorageNameInput();
```

- *Type:* java.lang.String

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName"></a>

```java
public java.lang.String getStorageName();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>

---


### ContainerAppTimeoutsOutputReference <a name="ContainerAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app.ContainerAppTimeoutsOutputReference;

new ContainerAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

---



