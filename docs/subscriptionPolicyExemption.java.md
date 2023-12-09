# `subscriptionPolicyExemption` Submodule <a name="`subscriptionPolicyExemption` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyExemption <a name="SubscriptionPolicyExemption" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption azurerm_subscription_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemption;

SubscriptionPolicyExemption.Builder.create(Construct scope, java.lang.String id)
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
    .exemptionCategory(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
    .subscriptionId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .policyDefinitionReferenceIds(java.util.List<java.lang.String>)
//  .timeouts(SubscriptionPolicyExemptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.exemptionCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.policyAssignmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.expiresOn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#timeouts SubscriptionPolicyExemption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetPolicyDefinitionReferenceIds">resetPolicyDefinitionReferenceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts"></a>

```java
public void putTimeouts(SubscriptionPolicyExemptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetExpiresOn"></a>

```java
public void resetExpiresOn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPolicyDefinitionReferenceIds` <a name="resetPolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```java
public void resetPolicyDefinitionReferenceIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SubscriptionPolicyExemption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemption;

SubscriptionPolicyExemption.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemption;

SubscriptionPolicyExemption.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemption;

SubscriptionPolicyExemption.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemption;

SubscriptionPolicyExemption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SubscriptionPolicyExemption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SubscriptionPolicyExemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SubscriptionPolicyExemption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SubscriptionPolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionPolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference">SubscriptionPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategoryInput">exemptionCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOnInput">expiresOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIdsInput">policyDefinitionReferenceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeouts"></a>

```java
public SubscriptionPolicyExemptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference">SubscriptionPolicyExemptionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exemptionCategoryInput`<sup>Optional</sup> <a name="exemptionCategoryInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategoryInput"></a>

```java
public java.lang.String getExemptionCategoryInput();
```

- *Type:* java.lang.String

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOnInput"></a>

```java
public java.lang.String getExpiresOnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentIdInput"></a>

```java
public java.lang.String getPolicyAssignmentIdInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIdsInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdsInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.exemptionCategory"></a>

```java
public java.lang.String getExemptionCategory();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIds`<sup>Required</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.policyDefinitionReferenceIds"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemption.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyExemptionConfig <a name="SubscriptionPolicyExemptionConfig" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemptionConfig;

SubscriptionPolicyExemptionConfig.builder()
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
    .exemptionCategory(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
    .subscriptionId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .policyDefinitionReferenceIds(java.util.List<java.lang.String>)
//  .timeouts(SubscriptionPolicyExemptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.exemptionCategory"></a>

```java
public java.lang.String getExemptionCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#exemption_category SubscriptionPolicyExemption#exemption_category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#name SubscriptionPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_assignment_id SubscriptionPolicyExemption#policy_assignment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#subscription_id SubscriptionPolicyExemption#subscription_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#description SubscriptionPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#display_name SubscriptionPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#expires_on SubscriptionPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#id SubscriptionPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#metadata SubscriptionPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#policy_definition_reference_ids SubscriptionPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionConfig.property.timeouts"></a>

```java
public SubscriptionPolicyExemptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#timeouts SubscriptionPolicyExemption#timeouts}

---

### SubscriptionPolicyExemptionTimeouts <a name="SubscriptionPolicyExemptionTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemptionTimeouts;

SubscriptionPolicyExemptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#create SubscriptionPolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#delete SubscriptionPolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#read SubscriptionPolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#update SubscriptionPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#create SubscriptionPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#delete SubscriptionPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#read SubscriptionPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/subscription_policy_exemption#update SubscriptionPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyExemptionTimeoutsOutputReference <a name="SubscriptionPolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_policy_exemption.SubscriptionPolicyExemptionTimeoutsOutputReference;

new SubscriptionPolicyExemptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionPolicyExemption.SubscriptionPolicyExemptionTimeouts">SubscriptionPolicyExemptionTimeouts</a>

---



