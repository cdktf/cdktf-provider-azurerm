# `securityCenterAssessmentPolicy` Submodule <a name="`securityCenterAssessmentPolicy` Submodule" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAssessmentPolicy <a name="SecurityCenterAssessmentPolicy" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy azurerm_security_center_assessment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicy;

SecurityCenterAssessmentPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .categories(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .implementationEffort(java.lang.String)
//  .remediationDescription(java.lang.String)
//  .severity(java.lang.String)
//  .threats(java.util.List<java.lang.String>)
//  .timeouts(SecurityCenterAssessmentPolicyTimeouts)
//  .userImpact(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.implementationEffort">implementationEffort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.remediationDescription">remediationDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.threats">threats</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.userImpact">userImpact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.categories"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implementationEffort`<sup>Optional</sup> <a name="implementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.implementationEffort"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}.

---

##### `remediationDescription`<sup>Optional</sup> <a name="remediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.remediationDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}.

---

##### `threats`<sup>Optional</sup> <a name="threats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.threats"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#timeouts SecurityCenterAssessmentPolicy#timeouts}

---

##### `userImpact`<sup>Optional</sup> <a name="userImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.userImpact"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort">resetImplementationEffort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription">resetRemediationDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats">resetThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact">resetUserImpact</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts"></a>

```java
public void putTimeouts(SecurityCenterAssessmentPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetImplementationEffort` <a name="resetImplementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort"></a>

```java
public void resetImplementationEffort()
```

##### `resetRemediationDescription` <a name="resetRemediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription"></a>

```java
public void resetRemediationDescription()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetThreats` <a name="resetThreats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats"></a>

```java
public void resetThreats()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserImpact` <a name="resetUserImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact"></a>

```java
public void resetUserImpact()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicy;

SecurityCenterAssessmentPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicy;

SecurityCenterAssessmentPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicy;

SecurityCenterAssessmentPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicy;

SecurityCenterAssessmentPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityCenterAssessmentPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityCenterAssessmentPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityCenterAssessmentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterAssessmentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput">implementationEffortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput">remediationDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput">threatsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput">userImpactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort">implementationEffort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription">remediationDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats">threats</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact">userImpact</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts"></a>

```java
public SecurityCenterAssessmentPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a>

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `implementationEffortInput`<sup>Optional</sup> <a name="implementationEffortInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput"></a>

```java
public java.lang.String getImplementationEffortInput();
```

- *Type:* java.lang.String

---

##### `remediationDescriptionInput`<sup>Optional</sup> <a name="remediationDescriptionInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput"></a>

```java
public java.lang.String getRemediationDescriptionInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `threatsInput`<sup>Optional</sup> <a name="threatsInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput"></a>

```java
public java.util.List<java.lang.String> getThreatsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---

##### `userImpactInput`<sup>Optional</sup> <a name="userImpactInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput"></a>

```java
public java.lang.String getUserImpactInput();
```

- *Type:* java.lang.String

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `implementationEffort`<sup>Required</sup> <a name="implementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort"></a>

```java
public java.lang.String getImplementationEffort();
```

- *Type:* java.lang.String

---

##### `remediationDescription`<sup>Required</sup> <a name="remediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription"></a>

```java
public java.lang.String getRemediationDescription();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `threats`<sup>Required</sup> <a name="threats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats"></a>

```java
public java.util.List<java.lang.String> getThreats();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userImpact`<sup>Required</sup> <a name="userImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact"></a>

```java
public java.lang.String getUserImpact();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAssessmentPolicyConfig <a name="SecurityCenterAssessmentPolicyConfig" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicyConfig;

SecurityCenterAssessmentPolicyConfig.builder()
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .categories(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .implementationEffort(java.lang.String)
//  .remediationDescription(java.lang.String)
//  .severity(java.lang.String)
//  .threats(java.util.List<java.lang.String>)
//  .timeouts(SecurityCenterAssessmentPolicyTimeouts)
//  .userImpact(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort">implementationEffort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription">remediationDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats">threats</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact">userImpact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implementationEffort`<sup>Optional</sup> <a name="implementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort"></a>

```java
public java.lang.String getImplementationEffort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}.

---

##### `remediationDescription`<sup>Optional</sup> <a name="remediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription"></a>

```java
public java.lang.String getRemediationDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}.

---

##### `threats`<sup>Optional</sup> <a name="threats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats"></a>

```java
public java.util.List<java.lang.String> getThreats();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts"></a>

```java
public SecurityCenterAssessmentPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#timeouts SecurityCenterAssessmentPolicy#timeouts}

---

##### `userImpact`<sup>Optional</sup> <a name="userImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact"></a>

```java
public java.lang.String getUserImpact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}.

---

### SecurityCenterAssessmentPolicyTimeouts <a name="SecurityCenterAssessmentPolicyTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicyTimeouts;

SecurityCenterAssessmentPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAssessmentPolicyTimeoutsOutputReference <a name="SecurityCenterAssessmentPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_assessment_policy.SecurityCenterAssessmentPolicyTimeoutsOutputReference;

new SecurityCenterAssessmentPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---



