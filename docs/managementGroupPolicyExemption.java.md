# `managementGroupPolicyExemption` Submodule <a name="`managementGroupPolicyExemption` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyExemption <a name="ManagementGroupPolicyExemption" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption azurerm_management_group_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemption;

ManagementGroupPolicyExemption.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .exemptionCategory(java.lang.String)
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .policyDefinitionReferenceIds(java.util.List<java.lang.String>)
//  .timeouts(ManagementGroupPolicyExemptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.exemptionCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}.

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyAssignmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.expiresOn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#timeouts ManagementGroupPolicyExemption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds">resetPolicyDefinitionReferenceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts"></a>

```java
public void putTimeouts(ManagementGroupPolicyExemptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn"></a>

```java
public void resetExpiresOn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPolicyDefinitionReferenceIds` <a name="resetPolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```java
public void resetPolicyDefinitionReferenceIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemption;

ManagementGroupPolicyExemption.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemption;

ManagementGroupPolicyExemption.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemption;

ManagementGroupPolicyExemption.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemption;

ManagementGroupPolicyExemption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagementGroupPolicyExemption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagementGroupPolicyExemption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagementGroupPolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupPolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput">exemptionCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput">expiresOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput">policyDefinitionReferenceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts"></a>

```java
public ManagementGroupPolicyExemptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exemptionCategoryInput`<sup>Optional</sup> <a name="exemptionCategoryInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput"></a>

```java
public java.lang.String getExemptionCategoryInput();
```

- *Type:* java.lang.String

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput"></a>

```java
public java.lang.String getExpiresOnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput"></a>

```java
public java.lang.String getPolicyAssignmentIdInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIdsInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdsInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput"></a>

```java
public IResolvable|ManagementGroupPolicyExemptionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory"></a>

```java
public java.lang.String getExemptionCategory();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIds`<sup>Required</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyExemptionConfig <a name="ManagementGroupPolicyExemptionConfig" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemptionConfig;

ManagementGroupPolicyExemptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .exemptionCategory(java.lang.String)
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .policyDefinitionReferenceIds(java.util.List<java.lang.String>)
//  .timeouts(ManagementGroupPolicyExemptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory">exemptionCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds">policyDefinitionReferenceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exemptionCategory`<sup>Required</sup> <a name="exemptionCategory" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory"></a>

```java
public java.lang.String getExemptionCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}.

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}.

---

##### `policyDefinitionReferenceIds`<sup>Optional</sup> <a name="policyDefinitionReferenceIds" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```java
public java.util.List<java.lang.String> getPolicyDefinitionReferenceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts"></a>

```java
public ManagementGroupPolicyExemptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#timeouts ManagementGroupPolicyExemption#timeouts}

---

### ManagementGroupPolicyExemptionTimeouts <a name="ManagementGroupPolicyExemptionTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemptionTimeouts;

ManagementGroupPolicyExemptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyExemptionTimeoutsOutputReference <a name="ManagementGroupPolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_exemption.ManagementGroupPolicyExemptionTimeoutsOutputReference;

new ManagementGroupPolicyExemptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ManagementGroupPolicyExemptionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

---



