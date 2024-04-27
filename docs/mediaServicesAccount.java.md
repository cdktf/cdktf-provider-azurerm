# `mediaServicesAccount` Submodule <a name="`mediaServicesAccount` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccount <a name="MediaServicesAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account azurerm_media_services_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccount;

MediaServicesAccount.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccount(IResolvable)
    .storageAccount(java.util.List<MediaServicesAccountStorageAccount>)
//  .encryption(MediaServicesAccountEncryption)
//  .id(java.lang.String)
//  .identity(MediaServicesAccountIdentity)
//  .keyDeliveryAccessControl(MediaServicesAccountKeyDeliveryAccessControl)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .storageAuthenticationType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MediaServicesAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#location MediaServicesAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#name MediaServicesAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.keyDeliveryAccessControl">keyDeliveryAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | key_delivery_access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAuthenticationType">storageAuthenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#location MediaServicesAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#name MediaServicesAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}.

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAccount"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_account MediaServicesAccount#storage_account}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#encryption MediaServicesAccount#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#identity MediaServicesAccount#identity}

---

##### `keyDeliveryAccessControl`<sup>Optional</sup> <a name="keyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.keyDeliveryAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

key_delivery_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}.

---

##### `storageAuthenticationType`<sup>Optional</sup> <a name="storageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.storageAuthenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#timeouts MediaServicesAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl">putKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl">resetKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType">resetStorageAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption"></a>

```java
public void putEncryption(MediaServicesAccountEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity"></a>

```java
public void putIdentity(MediaServicesAccountIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---

##### `putKeyDeliveryAccessControl` <a name="putKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl"></a>

```java
public void putKeyDeliveryAccessControl(MediaServicesAccountKeyDeliveryAccessControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount"></a>

```java
public void putStorageAccount(IResolvable OR java.util.List<MediaServicesAccountStorageAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts"></a>

```java
public void putTimeouts(MediaServicesAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyDeliveryAccessControl` <a name="resetKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl"></a>

```java
public void resetKeyDeliveryAccessControl()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetStorageAuthenticationType` <a name="resetStorageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType"></a>

```java
public void resetStorageAuthenticationType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccount;

MediaServicesAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccount;

MediaServicesAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccount;

MediaServicesAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccount;

MediaServicesAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaServicesAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaServicesAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaServicesAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaServicesAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl">keyDeliveryAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput">keyDeliveryAccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput">storageAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput">storageAuthenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType">storageAuthenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption"></a>

```java
public MediaServicesAccountEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity"></a>

```java
public MediaServicesAccountIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a>

---

##### `keyDeliveryAccessControl`<sup>Required</sup> <a name="keyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl"></a>

```java
public MediaServicesAccountKeyDeliveryAccessControlOutputReference getKeyDeliveryAccessControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a>

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount"></a>

```java
public MediaServicesAccountStorageAccountList getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts"></a>

```java
public MediaServicesAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput"></a>

```java
public MediaServicesAccountEncryption getEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput"></a>

```java
public MediaServicesAccountIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyDeliveryAccessControlInput`<sup>Optional</sup> <a name="keyDeliveryAccessControlInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput"></a>

```java
public MediaServicesAccountKeyDeliveryAccessControl getKeyDeliveryAccessControlInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput"></a>

```java
public java.lang.Object getStorageAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>>

---

##### `storageAuthenticationTypeInput`<sup>Optional</sup> <a name="storageAuthenticationTypeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput"></a>

```java
public java.lang.String getStorageAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAuthenticationType`<sup>Required</sup> <a name="storageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType"></a>

```java
public java.lang.String getStorageAuthenticationType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountConfig <a name="MediaServicesAccountConfig" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountConfig;

MediaServicesAccountConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccount(IResolvable)
    .storageAccount(java.util.List<MediaServicesAccountStorageAccount>)
//  .encryption(MediaServicesAccountEncryption)
//  .id(java.lang.String)
//  .identity(MediaServicesAccountIdentity)
//  .keyDeliveryAccessControl(MediaServicesAccountKeyDeliveryAccessControl)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .storageAuthenticationType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MediaServicesAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#location MediaServicesAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#name MediaServicesAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount">storageAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl">keyDeliveryAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | key_delivery_access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType">storageAuthenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#location MediaServicesAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#name MediaServicesAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}.

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount"></a>

```java
public java.lang.Object getStorageAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_account MediaServicesAccount#storage_account}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption"></a>

```java
public MediaServicesAccountEncryption getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#encryption MediaServicesAccount#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity"></a>

```java
public MediaServicesAccountIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#identity MediaServicesAccount#identity}

---

##### `keyDeliveryAccessControl`<sup>Optional</sup> <a name="keyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl"></a>

```java
public MediaServicesAccountKeyDeliveryAccessControl getKeyDeliveryAccessControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

key_delivery_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}.

---

##### `storageAuthenticationType`<sup>Optional</sup> <a name="storageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType"></a>

```java
public java.lang.String getStorageAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts"></a>

```java
public MediaServicesAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#timeouts MediaServicesAccount#timeouts}

---

### MediaServicesAccountEncryption <a name="MediaServicesAccountEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountEncryption;

MediaServicesAccountEncryption.builder()
//  .keyVaultKeyIdentifier(java.lang.String)
//  .managedIdentity(MediaServicesAccountEncryptionManagedIdentity)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier">keyVaultKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#type MediaServicesAccount#type}. |

---

##### `keyVaultKeyIdentifier`<sup>Optional</sup> <a name="keyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier"></a>

```java
public java.lang.String getKeyVaultKeyIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}.

---

##### `managedIdentity`<sup>Optional</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity"></a>

```java
public MediaServicesAccountEncryptionManagedIdentity getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

### MediaServicesAccountEncryptionManagedIdentity <a name="MediaServicesAccountEncryptionManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountEncryptionManagedIdentity;

MediaServicesAccountEncryptionManagedIdentity.builder()
//  .userAssignedIdentityId(java.lang.String)
//  .useSystemAssignedIdentity(java.lang.Boolean)
//  .useSystemAssignedIdentity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `useSystemAssignedIdentity`<sup>Optional</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity"></a>

```java
public java.lang.Object getUseSystemAssignedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountIdentity <a name="MediaServicesAccountIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountIdentity;

MediaServicesAccountIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#type MediaServicesAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#type MediaServicesAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}.

---

### MediaServicesAccountKeyDeliveryAccessControl <a name="MediaServicesAccountKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountKeyDeliveryAccessControl;

MediaServicesAccountKeyDeliveryAccessControl.builder()
//  .defaultAction(java.lang.String)
//  .ipAllowList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList">ipAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}.

---

##### `ipAllowList`<sup>Optional</sup> <a name="ipAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList"></a>

```java
public java.util.List<java.lang.String> getIpAllowList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}.

---

### MediaServicesAccountStorageAccount <a name="MediaServicesAccountStorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountStorageAccount;

MediaServicesAccountStorageAccount.builder()
    .id(java.lang.String)
//  .isPrimary(java.lang.Boolean)
//  .isPrimary(IResolvable)
//  .managedIdentity(MediaServicesAccountStorageAccountManagedIdentity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#is_primary MediaServicesAccount#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | managed_identity block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPrimary`<sup>Optional</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#is_primary MediaServicesAccount#is_primary}.

---

##### `managedIdentity`<sup>Optional</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity"></a>

```java
public MediaServicesAccountStorageAccountManagedIdentity getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

### MediaServicesAccountStorageAccountManagedIdentity <a name="MediaServicesAccountStorageAccountManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountStorageAccountManagedIdentity;

MediaServicesAccountStorageAccountManagedIdentity.builder()
//  .userAssignedIdentityId(java.lang.String)
//  .useSystemAssignedIdentity(java.lang.Boolean)
//  .useSystemAssignedIdentity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `useSystemAssignedIdentity`<sup>Optional</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity"></a>

```java
public java.lang.Object getUseSystemAssignedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountTimeouts <a name="MediaServicesAccountTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountTimeouts;

MediaServicesAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#create MediaServicesAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#read MediaServicesAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#update MediaServicesAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#create MediaServicesAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#read MediaServicesAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/media_services_account#update MediaServicesAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountEncryptionManagedIdentityOutputReference <a name="MediaServicesAccountEncryptionManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountEncryptionManagedIdentityOutputReference;

new MediaServicesAccountEncryptionManagedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity">resetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

##### `resetUseSystemAssignedIdentity` <a name="resetUseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```java
public void resetUseSystemAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">useSystemAssignedIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `useSystemAssignedIdentityInput`<sup>Optional</sup> <a name="useSystemAssignedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```java
public java.lang.Object getUseSystemAssignedIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `useSystemAssignedIdentity`<sup>Required</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```java
public java.lang.Object getUseSystemAssignedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue"></a>

```java
public MediaServicesAccountEncryptionManagedIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---


### MediaServicesAccountEncryptionOutputReference <a name="MediaServicesAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountEncryptionOutputReference;

new MediaServicesAccountEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity">putManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier">resetKeyVaultKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity">resetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedIdentity` <a name="putManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity"></a>

```java
public void putManagedIdentity(MediaServicesAccountEncryptionManagedIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---

##### `resetKeyVaultKeyIdentifier` <a name="resetKeyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier"></a>

```java
public void resetKeyVaultKeyIdentifier()
```

##### `resetManagedIdentity` <a name="resetManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity"></a>

```java
public void resetManagedIdentity()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier">currentKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput">keyVaultKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput">managedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier">keyVaultKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentKeyIdentifier`<sup>Required</sup> <a name="currentKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier"></a>

```java
public java.lang.String getCurrentKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `managedIdentity`<sup>Required</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity"></a>

```java
public MediaServicesAccountEncryptionManagedIdentityOutputReference getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a>

---

##### `keyVaultKeyIdentifierInput`<sup>Optional</sup> <a name="keyVaultKeyIdentifierInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput"></a>

```java
public java.lang.String getKeyVaultKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `managedIdentityInput`<sup>Optional</sup> <a name="managedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput"></a>

```java
public MediaServicesAccountEncryptionManagedIdentity getManagedIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdentifier`<sup>Required</sup> <a name="keyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier"></a>

```java
public java.lang.String getKeyVaultKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue"></a>

```java
public MediaServicesAccountEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---


### MediaServicesAccountIdentityOutputReference <a name="MediaServicesAccountIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountIdentityOutputReference;

new MediaServicesAccountIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue"></a>

```java
public MediaServicesAccountIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---


### MediaServicesAccountKeyDeliveryAccessControlOutputReference <a name="MediaServicesAccountKeyDeliveryAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountKeyDeliveryAccessControlOutputReference;

new MediaServicesAccountKeyDeliveryAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList">resetIpAllowList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetIpAllowList` <a name="resetIpAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList"></a>

```java
public void resetIpAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput">ipAllowListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList">ipAllowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipAllowListInput`<sup>Optional</sup> <a name="ipAllowListInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput"></a>

```java
public java.util.List<java.lang.String> getIpAllowListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `ipAllowList`<sup>Required</sup> <a name="ipAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList"></a>

```java
public java.util.List<java.lang.String> getIpAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue"></a>

```java
public MediaServicesAccountKeyDeliveryAccessControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---


### MediaServicesAccountStorageAccountList <a name="MediaServicesAccountStorageAccountList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountStorageAccountList;

new MediaServicesAccountStorageAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get"></a>

```java
public MediaServicesAccountStorageAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>>

---


### MediaServicesAccountStorageAccountManagedIdentityOutputReference <a name="MediaServicesAccountStorageAccountManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountStorageAccountManagedIdentityOutputReference;

new MediaServicesAccountStorageAccountManagedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity">resetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

##### `resetUseSystemAssignedIdentity` <a name="resetUseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```java
public void resetUseSystemAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">useSystemAssignedIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity">useSystemAssignedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `useSystemAssignedIdentityInput`<sup>Optional</sup> <a name="useSystemAssignedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```java
public java.lang.Object getUseSystemAssignedIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `useSystemAssignedIdentity`<sup>Required</sup> <a name="useSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```java
public java.lang.Object getUseSystemAssignedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue"></a>

```java
public MediaServicesAccountStorageAccountManagedIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---


### MediaServicesAccountStorageAccountOutputReference <a name="MediaServicesAccountStorageAccountOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountStorageAccountOutputReference;

new MediaServicesAccountStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity">putManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary">resetIsPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity">resetManagedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedIdentity` <a name="putManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity"></a>

```java
public void putManagedIdentity(MediaServicesAccountStorageAccountManagedIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---

##### `resetIsPrimary` <a name="resetIsPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary"></a>

```java
public void resetIsPrimary()
```

##### `resetManagedIdentity` <a name="resetManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity"></a>

```java
public void resetManagedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput">managedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedIdentity`<sup>Required</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity"></a>

```java
public MediaServicesAccountStorageAccountManagedIdentityOutputReference getManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedIdentityInput`<sup>Optional</sup> <a name="managedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput"></a>

```java
public MediaServicesAccountStorageAccountManagedIdentity getManagedIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount">MediaServicesAccountStorageAccount</a>

---


### MediaServicesAccountTimeoutsOutputReference <a name="MediaServicesAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_services_account.MediaServicesAccountTimeoutsOutputReference;

new MediaServicesAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

---



