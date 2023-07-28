# `azurerm_private_endpoint_application_security_group_association`

Refer to the Terraform Registory for docs: [`azurerm_private_endpoint_application_security_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association).

# `privateEndpointApplicationSecurityGroupAssociation` Submodule <a name="`privateEndpointApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpointApplicationSecurityGroupAssociation <a name="PrivateEndpointApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association azurerm_private_endpoint_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociation;

PrivateEndpointApplicationSecurityGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .applicationSecurityGroupId(java.lang.String)
    .privateEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PrivateEndpointApplicationSecurityGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.applicationSecurityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.privateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(PrivateEndpointApplicationSecurityGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociation;

PrivateEndpointApplicationSecurityGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociation;

PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociation;

PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">applicationSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts"></a>

```java
public PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `applicationSecurityGroupIdInput`<sup>Optional</sup> <a name="applicationSecurityGroupIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```java
public java.lang.String getApplicationSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput"></a>

```java
public java.lang.String getPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```java
public java.lang.String getApplicationSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointApplicationSecurityGroupAssociationConfig <a name="PrivateEndpointApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociationConfig;

PrivateEndpointApplicationSecurityGroupAssociationConfig.builder()
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
    .applicationSecurityGroupId(java.lang.String)
    .privateEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PrivateEndpointApplicationSecurityGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```java
public java.lang.String getApplicationSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```java
public PrivateEndpointApplicationSecurityGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

### PrivateEndpointApplicationSecurityGroupAssociationTimeouts <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociationTimeouts;

PrivateEndpointApplicationSecurityGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_endpoint_application_security_group_association.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference;

new PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---



