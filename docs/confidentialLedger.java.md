# `confidentialLedger` Submodule <a name="`confidentialLedger` Submodule" id="@cdktf/provider-azurerm.confidentialLedger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfidentialLedger <a name="ConfidentialLedger" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger azurerm_confidential_ledger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedger;

ConfidentialLedger.Builder.create(Construct scope, java.lang.String id)
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
    .azureadBasedServicePrincipal(IResolvable)
    .azureadBasedServicePrincipal(java.util.List<ConfidentialLedgerAzureadBasedServicePrincipal>)
    .ledgerType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .certificateBasedSecurityPrincipal(IResolvable)
//  .certificateBasedSecurityPrincipal(java.util.List<ConfidentialLedgerCertificateBasedSecurityPrincipal>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ConfidentialLedgerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.azureadBasedServicePrincipal">azureadBasedServicePrincipal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>></code> | azuread_based_service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.ledgerType">ledgerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.certificateBasedSecurityPrincipal">certificateBasedSecurityPrincipal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>></code> | certificate_based_security_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureadBasedServicePrincipal`<sup>Required</sup> <a name="azureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.azureadBasedServicePrincipal"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>>

azuread_based_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#azuread_based_service_principal ConfidentialLedger#azuread_based_service_principal}

---

##### `ledgerType`<sup>Required</sup> <a name="ledgerType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.ledgerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}.

---

##### `certificateBasedSecurityPrincipal`<sup>Optional</sup> <a name="certificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.certificateBasedSecurityPrincipal"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>>

certificate_based_security_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#certificate_based_security_principal ConfidentialLedger#certificate_based_security_principal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#timeouts ConfidentialLedger#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal">putAzureadBasedServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal">putCertificateBasedSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetCertificateBasedSecurityPrincipal">resetCertificateBasedSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureadBasedServicePrincipal` <a name="putAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal"></a>

```java
public void putAzureadBasedServicePrincipal(IResolvable OR java.util.List<ConfidentialLedgerAzureadBasedServicePrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>>

---

##### `putCertificateBasedSecurityPrincipal` <a name="putCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal"></a>

```java
public void putCertificateBasedSecurityPrincipal(IResolvable OR java.util.List<ConfidentialLedgerCertificateBasedSecurityPrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts"></a>

```java
public void putTimeouts(ConfidentialLedgerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

---

##### `resetCertificateBasedSecurityPrincipal` <a name="resetCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetCertificateBasedSecurityPrincipal"></a>

```java
public void resetCertificateBasedSecurityPrincipal()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfidentialLedger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedger;

ConfidentialLedger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedger;

ConfidentialLedger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedger;

ConfidentialLedger.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedger;

ConfidentialLedger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfidentialLedger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfidentialLedger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfidentialLedger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfidentialLedger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfidentialLedger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipal">azureadBasedServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList">ConfidentialLedgerAzureadBasedServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipal">certificateBasedSecurityPrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList">ConfidentialLedgerCertificateBasedSecurityPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.identityServiceEndpoint">identityServiceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerEndpoint">ledgerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference">ConfidentialLedgerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipalInput">azureadBasedServicePrincipalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipalInput">certificateBasedSecurityPrincipalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerTypeInput">ledgerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerType">ledgerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureadBasedServicePrincipal`<sup>Required</sup> <a name="azureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipal"></a>

```java
public ConfidentialLedgerAzureadBasedServicePrincipalList getAzureadBasedServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList">ConfidentialLedgerAzureadBasedServicePrincipalList</a>

---

##### `certificateBasedSecurityPrincipal`<sup>Required</sup> <a name="certificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipal"></a>

```java
public ConfidentialLedgerCertificateBasedSecurityPrincipalList getCertificateBasedSecurityPrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList">ConfidentialLedgerCertificateBasedSecurityPrincipalList</a>

---

##### `identityServiceEndpoint`<sup>Required</sup> <a name="identityServiceEndpoint" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.identityServiceEndpoint"></a>

```java
public java.lang.String getIdentityServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `ledgerEndpoint`<sup>Required</sup> <a name="ledgerEndpoint" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerEndpoint"></a>

```java
public java.lang.String getLedgerEndpoint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeouts"></a>

```java
public ConfidentialLedgerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference">ConfidentialLedgerTimeoutsOutputReference</a>

---

##### `azureadBasedServicePrincipalInput`<sup>Optional</sup> <a name="azureadBasedServicePrincipalInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipalInput"></a>

```java
public java.lang.Object getAzureadBasedServicePrincipalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>>

---

##### `certificateBasedSecurityPrincipalInput`<sup>Optional</sup> <a name="certificateBasedSecurityPrincipalInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipalInput"></a>

```java
public java.lang.Object getCertificateBasedSecurityPrincipalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ledgerTypeInput`<sup>Optional</sup> <a name="ledgerTypeInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerTypeInput"></a>

```java
public java.lang.String getLedgerTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ledgerType`<sup>Required</sup> <a name="ledgerType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerType"></a>

```java
public java.lang.String getLedgerType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfidentialLedgerAzureadBasedServicePrincipal <a name="ConfidentialLedgerAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerAzureadBasedServicePrincipal;

ConfidentialLedgerAzureadBasedServicePrincipal.builder()
    .ledgerRoleName(java.lang.String)
    .principalId(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#principal_id ConfidentialLedger#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tenant_id ConfidentialLedger#tenant_id}. |

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#principal_id ConfidentialLedger#principal_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tenant_id ConfidentialLedger#tenant_id}.

---

### ConfidentialLedgerCertificateBasedSecurityPrincipal <a name="ConfidentialLedgerCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerCertificateBasedSecurityPrincipal;

ConfidentialLedgerCertificateBasedSecurityPrincipal.builder()
    .ledgerRoleName(java.lang.String)
    .pemPublicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.pemPublicKey">pemPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#pem_public_key ConfidentialLedger#pem_public_key}. |

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}.

---

##### `pemPublicKey`<sup>Required</sup> <a name="pemPublicKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.pemPublicKey"></a>

```java
public java.lang.String getPemPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#pem_public_key ConfidentialLedger#pem_public_key}.

---

### ConfidentialLedgerConfig <a name="ConfidentialLedgerConfig" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerConfig;

ConfidentialLedgerConfig.builder()
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
    .azureadBasedServicePrincipal(IResolvable)
    .azureadBasedServicePrincipal(java.util.List<ConfidentialLedgerAzureadBasedServicePrincipal>)
    .ledgerType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .certificateBasedSecurityPrincipal(IResolvable)
//  .certificateBasedSecurityPrincipal(java.util.List<ConfidentialLedgerCertificateBasedSecurityPrincipal>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ConfidentialLedgerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.azureadBasedServicePrincipal">azureadBasedServicePrincipal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>></code> | azuread_based_service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.ledgerType">ledgerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.certificateBasedSecurityPrincipal">certificateBasedSecurityPrincipal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>></code> | certificate_based_security_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureadBasedServicePrincipal`<sup>Required</sup> <a name="azureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.azureadBasedServicePrincipal"></a>

```java
public java.lang.Object getAzureadBasedServicePrincipal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>>

azuread_based_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#azuread_based_service_principal ConfidentialLedger#azuread_based_service_principal}

---

##### `ledgerType`<sup>Required</sup> <a name="ledgerType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.ledgerType"></a>

```java
public java.lang.String getLedgerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}.

---

##### `certificateBasedSecurityPrincipal`<sup>Optional</sup> <a name="certificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.certificateBasedSecurityPrincipal"></a>

```java
public java.lang.Object getCertificateBasedSecurityPrincipal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>>

certificate_based_security_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#certificate_based_security_principal ConfidentialLedger#certificate_based_security_principal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.timeouts"></a>

```java
public ConfidentialLedgerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#timeouts ConfidentialLedger#timeouts}

---

### ConfidentialLedgerTimeouts <a name="ConfidentialLedgerTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerTimeouts;

ConfidentialLedgerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#create ConfidentialLedger#create}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#delete ConfidentialLedger#delete}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#read ConfidentialLedger#read}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#update ConfidentialLedger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#create ConfidentialLedger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#delete ConfidentialLedger#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#read ConfidentialLedger#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/confidential_ledger#update ConfidentialLedger#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfidentialLedgerAzureadBasedServicePrincipalList <a name="ConfidentialLedgerAzureadBasedServicePrincipalList" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerAzureadBasedServicePrincipalList;

new ConfidentialLedgerAzureadBasedServicePrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get"></a>

```java
public ConfidentialLedgerAzureadBasedServicePrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>>

---


### ConfidentialLedgerAzureadBasedServicePrincipalOutputReference <a name="ConfidentialLedgerAzureadBasedServicePrincipalOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference;

new ConfidentialLedgerAzureadBasedServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleNameInput">ledgerRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ledgerRoleNameInput`<sup>Optional</sup> <a name="ledgerRoleNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleNameInput"></a>

```java
public java.lang.String getLedgerRoleNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal">ConfidentialLedgerAzureadBasedServicePrincipal</a>

---


### ConfidentialLedgerCertificateBasedSecurityPrincipalList <a name="ConfidentialLedgerCertificateBasedSecurityPrincipalList" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerCertificateBasedSecurityPrincipalList;

new ConfidentialLedgerCertificateBasedSecurityPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get"></a>

```java
public ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>>

---


### ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference <a name="ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference;

new ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleNameInput">ledgerRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKeyInput">pemPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey">pemPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ledgerRoleNameInput`<sup>Optional</sup> <a name="ledgerRoleNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleNameInput"></a>

```java
public java.lang.String getLedgerRoleNameInput();
```

- *Type:* java.lang.String

---

##### `pemPublicKeyInput`<sup>Optional</sup> <a name="pemPublicKeyInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKeyInput"></a>

```java
public java.lang.String getPemPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

---

##### `pemPublicKey`<sup>Required</sup> <a name="pemPublicKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey"></a>

```java
public java.lang.String getPemPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal">ConfidentialLedgerCertificateBasedSecurityPrincipal</a>

---


### ConfidentialLedgerTimeoutsOutputReference <a name="ConfidentialLedgerTimeoutsOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.confidential_ledger.ConfidentialLedgerTimeoutsOutputReference;

new ConfidentialLedgerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

---



