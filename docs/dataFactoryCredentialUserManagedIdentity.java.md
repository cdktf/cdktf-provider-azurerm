# `dataFactoryCredentialUserManagedIdentity` Submodule <a name="`dataFactoryCredentialUserManagedIdentity` Submodule" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCredentialUserManagedIdentity <a name="DataFactoryCredentialUserManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity azurerm_data_factory_credential_user_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentity;

DataFactoryCredentialUserManagedIdentity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .identityId(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataFactoryCredentialUserManagedIdentityTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | The resource ID of the User Assigned Managed Identity. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#data_factory_id DataFactoryCredentialUserManagedIdentity#data_factory_id}

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

The resource ID of the User Assigned Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#identity_id DataFactoryCredentialUserManagedIdentity#identity_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#name DataFactoryCredentialUserManagedIdentity#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#annotations DataFactoryCredentialUserManagedIdentity#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.description"></a>

- *Type:* java.lang.String

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#description DataFactoryCredentialUserManagedIdentity#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#timeouts DataFactoryCredentialUserManagedIdentity#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryCredentialUserManagedIdentityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryCredentialUserManagedIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentity;

DataFactoryCredentialUserManagedIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentity;

DataFactoryCredentialUserManagedIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentity;

DataFactoryCredentialUserManagedIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentity;

DataFactoryCredentialUserManagedIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryCredentialUserManagedIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryCredentialUserManagedIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryCredentialUserManagedIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryCredentialUserManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCredentialUserManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference">DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeouts"></a>

```java
public DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference">DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.timeoutsInput"></a>

```java
public IResolvable|DataFactoryCredentialUserManagedIdentityTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCredentialUserManagedIdentityConfig <a name="DataFactoryCredentialUserManagedIdentityConfig" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentityConfig;

DataFactoryCredentialUserManagedIdentityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .identityId(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataFactoryCredentialUserManagedIdentityTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | The resource ID of the User Assigned Managed Identity. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.name">name</a></code> | <code>java.lang.String</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.description">description</a></code> | <code>java.lang.String</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#data_factory_id DataFactoryCredentialUserManagedIdentity#data_factory_id}

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

The resource ID of the User Assigned Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#identity_id DataFactoryCredentialUserManagedIdentity#identity_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#name DataFactoryCredentialUserManagedIdentity#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#annotations DataFactoryCredentialUserManagedIdentity#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#description DataFactoryCredentialUserManagedIdentity#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#id DataFactoryCredentialUserManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityConfig.property.timeouts"></a>

```java
public DataFactoryCredentialUserManagedIdentityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#timeouts DataFactoryCredentialUserManagedIdentity#timeouts}

---

### DataFactoryCredentialUserManagedIdentityTimeouts <a name="DataFactoryCredentialUserManagedIdentityTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentityTimeouts;

DataFactoryCredentialUserManagedIdentityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#create DataFactoryCredentialUserManagedIdentity#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#delete DataFactoryCredentialUserManagedIdentity#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#read DataFactoryCredentialUserManagedIdentity#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#update DataFactoryCredentialUserManagedIdentity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#create DataFactoryCredentialUserManagedIdentity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#delete DataFactoryCredentialUserManagedIdentity#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#read DataFactoryCredentialUserManagedIdentity#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_factory_credential_user_managed_identity#update DataFactoryCredentialUserManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference <a name="DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_credential_user_managed_identity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference;

new DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataFactoryCredentialUserManagedIdentityTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataFactoryCredentialUserManagedIdentity.DataFactoryCredentialUserManagedIdentityTimeouts">DataFactoryCredentialUserManagedIdentityTimeouts</a>

---



