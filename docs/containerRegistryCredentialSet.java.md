# `containerRegistryCredentialSet` Submodule <a name="`containerRegistryCredentialSet` Submodule" id="@cdktf/provider-azurerm.containerRegistryCredentialSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryCredentialSet <a name="ContainerRegistryCredentialSet" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set azurerm_container_registry_credential_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSet;

ContainerRegistryCredentialSet.Builder.create(Construct scope, java.lang.String id)
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
    .authenticationCredentials(ContainerRegistryCredentialSetAuthenticationCredentials)
    .containerRegistryId(java.lang.String)
    .identity(ContainerRegistryCredentialSetIdentity)
    .loginServer(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ContainerRegistryCredentialSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.authenticationCredentials">authenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | authentication_credentials block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.containerRegistryId">containerRegistryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.loginServer">loginServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the credential set. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationCredentials`<sup>Required</sup> <a name="authenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.authenticationCredentials"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#authentication_credentials ContainerRegistryCredentialSet#authentication_credentials}

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.containerRegistryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#identity ContainerRegistryCredentialSet#identity}

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.loginServer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the credential set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#name ContainerRegistryCredentialSet#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#timeouts ContainerRegistryCredentialSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials">putAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationCredentials` <a name="putAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials"></a>

```java
public void putAuthenticationCredentials(ContainerRegistryCredentialSetAuthenticationCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity"></a>

```java
public void putIdentity(ContainerRegistryCredentialSetIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts"></a>

```java
public void putTimeouts(ContainerRegistryCredentialSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSet;

ContainerRegistryCredentialSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSet;

ContainerRegistryCredentialSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSet;

ContainerRegistryCredentialSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSet;

ContainerRegistryCredentialSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerRegistryCredentialSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerRegistryCredentialSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerRegistryCredentialSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryCredentialSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials">authenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput">authenticationCredentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput">containerRegistryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput">loginServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId">containerRegistryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer">loginServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationCredentials`<sup>Required</sup> <a name="authenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials"></a>

```java
public ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference getAuthenticationCredentials();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity"></a>

```java
public ContainerRegistryCredentialSetIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts"></a>

```java
public ContainerRegistryCredentialSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a>

---

##### `authenticationCredentialsInput`<sup>Optional</sup> <a name="authenticationCredentialsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput"></a>

```java
public ContainerRegistryCredentialSetAuthenticationCredentials getAuthenticationCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `containerRegistryIdInput`<sup>Optional</sup> <a name="containerRegistryIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput"></a>

```java
public java.lang.String getContainerRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput"></a>

```java
public ContainerRegistryCredentialSetIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginServerInput`<sup>Optional</sup> <a name="loginServerInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput"></a>

```java
public java.lang.String getLoginServerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId"></a>

```java
public java.lang.String getContainerRegistryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer"></a>

```java
public java.lang.String getLoginServer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryCredentialSetAuthenticationCredentials <a name="ContainerRegistryCredentialSetAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetAuthenticationCredentials;

ContainerRegistryCredentialSetAuthenticationCredentials.builder()
    .passwordSecretId(java.lang.String)
    .usernameSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId">usernameSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}. |

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}.

---

##### `usernameSecretId`<sup>Required</sup> <a name="usernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId"></a>

```java
public java.lang.String getUsernameSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}.

---

### ContainerRegistryCredentialSetConfig <a name="ContainerRegistryCredentialSetConfig" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetConfig;

ContainerRegistryCredentialSetConfig.builder()
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
    .authenticationCredentials(ContainerRegistryCredentialSetAuthenticationCredentials)
    .containerRegistryId(java.lang.String)
    .identity(ContainerRegistryCredentialSetIdentity)
    .loginServer(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ContainerRegistryCredentialSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials">authenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | authentication_credentials block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId">containerRegistryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer">loginServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the credential set. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationCredentials`<sup>Required</sup> <a name="authenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials"></a>

```java
public ContainerRegistryCredentialSetAuthenticationCredentials getAuthenticationCredentials();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#authentication_credentials ContainerRegistryCredentialSet#authentication_credentials}

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId"></a>

```java
public java.lang.String getContainerRegistryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity"></a>

```java
public ContainerRegistryCredentialSetIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#identity ContainerRegistryCredentialSet#identity}

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer"></a>

```java
public java.lang.String getLoginServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the credential set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#name ContainerRegistryCredentialSet#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts"></a>

```java
public ContainerRegistryCredentialSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#timeouts ContainerRegistryCredentialSet#timeouts}

---

### ContainerRegistryCredentialSetIdentity <a name="ContainerRegistryCredentialSetIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetIdentity;

ContainerRegistryCredentialSetIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}.

---

### ContainerRegistryCredentialSetTimeouts <a name="ContainerRegistryCredentialSetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetTimeouts;

ContainerRegistryCredentialSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference <a name="ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference;

new ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput">usernameSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId">usernameSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `usernameSecretIdInput`<sup>Optional</sup> <a name="usernameSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput"></a>

```java
public java.lang.String getUsernameSecretIdInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `usernameSecretId`<sup>Required</sup> <a name="usernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId"></a>

```java
public java.lang.String getUsernameSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue"></a>

```java
public ContainerRegistryCredentialSetAuthenticationCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---


### ContainerRegistryCredentialSetIdentityOutputReference <a name="ContainerRegistryCredentialSetIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetIdentityOutputReference;

new ContainerRegistryCredentialSetIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue"></a>

```java
public ContainerRegistryCredentialSetIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---


### ContainerRegistryCredentialSetTimeoutsOutputReference <a name="ContainerRegistryCredentialSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_credential_set.ContainerRegistryCredentialSetTimeoutsOutputReference;

new ContainerRegistryCredentialSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---



