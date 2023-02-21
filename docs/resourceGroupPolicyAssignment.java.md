# `resourceGroupPolicyAssignment` Submodule <a name="`resourceGroupPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyAssignment <a name="ResourceGroupPolicyAssignment" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment azurerm_resource_group_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignment;

ResourceGroupPolicyAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyDefinitionId(java.lang.String)
    .resourceGroupId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enforce(java.lang.Boolean)
//  .enforce(IResolvable)
//  .id(java.lang.String)
//  .identity(ResourceGroupPolicyAssignmentIdentity)
//  .location(java.lang.String)
//  .metadata(java.lang.String)
//  .nonComplianceMessage(IResolvable)
//  .nonComplianceMessage(java.util.List<ResourceGroupPolicyAssignmentNonComplianceMessage>)
//  .notScopes(java.util.List<java.lang.String>)
//  .parameters(java.lang.String)
//  .timeouts(ResourceGroupPolicyAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.nonComplianceMessage">nonComplianceMessage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>></code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.notScopes">notScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}.

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.policyDefinitionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.resourceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.enforce"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#identity ResourceGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}.

---

##### `nonComplianceMessage`<sup>Optional</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.nonComplianceMessage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>>

non_compliance_message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#non_compliance_message ResourceGroupPolicyAssignment#non_compliance_message}

---

##### `notScopes`<sup>Optional</sup> <a name="notScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.notScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#timeouts ResourceGroupPolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage">putNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNonComplianceMessage">resetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNotScopes">resetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity"></a>

```java
public void putIdentity(ResourceGroupPolicyAssignmentIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---

##### `putNonComplianceMessage` <a name="putNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage"></a>

```java
public void putNonComplianceMessage(IResolvable OR java.util.List<ResourceGroupPolicyAssignmentNonComplianceMessage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts"></a>

```java
public void putTimeouts(ResourceGroupPolicyAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetEnforce"></a>

```java
public void resetEnforce()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNonComplianceMessage` <a name="resetNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNonComplianceMessage"></a>

```java
public void resetNonComplianceMessage()
```

##### `resetNotScopes` <a name="resetNotScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetNotScopes"></a>

```java
public void resetNotScopes()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignment;

ResourceGroupPolicyAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignment;

ResourceGroupPolicyAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignment;

ResourceGroupPolicyAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference">ResourceGroupPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList">ResourceGroupPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference">ResourceGroupPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforceInput">enforceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessageInput">nonComplianceMessageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopesInput">notScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopes">notScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identity"></a>

```java
public ResourceGroupPolicyAssignmentIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference">ResourceGroupPolicyAssignmentIdentityOutputReference</a>

---

##### `nonComplianceMessage`<sup>Required</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessage"></a>

```java
public ResourceGroupPolicyAssignmentNonComplianceMessageList getNonComplianceMessage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList">ResourceGroupPolicyAssignmentNonComplianceMessageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeouts"></a>

```java
public ResourceGroupPolicyAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference">ResourceGroupPolicyAssignmentTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforceInput"></a>

```java
public java.lang.Object getEnforceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.identityInput"></a>

```java
public ResourceGroupPolicyAssignmentIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonComplianceMessageInput`<sup>Optional</sup> <a name="nonComplianceMessageInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.nonComplianceMessageInput"></a>

```java
public java.lang.Object getNonComplianceMessageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>>

---

##### `notScopesInput`<sup>Optional</sup> <a name="notScopesInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopesInput"></a>

```java
public java.util.List<java.lang.String> getNotScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionIdInput"></a>

```java
public java.lang.String getPolicyDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notScopes`<sup>Required</sup> <a name="notScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.notScopes"></a>

```java
public java.util.List<java.lang.String> getNotScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyAssignmentConfig <a name="ResourceGroupPolicyAssignmentConfig" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentConfig;

ResourceGroupPolicyAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyDefinitionId(java.lang.String)
    .resourceGroupId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enforce(java.lang.Boolean)
//  .enforce(IResolvable)
//  .id(java.lang.String)
//  .identity(ResourceGroupPolicyAssignmentIdentity)
//  .location(java.lang.String)
//  .metadata(java.lang.String)
//  .nonComplianceMessage(IResolvable)
//  .nonComplianceMessage(java.util.List<ResourceGroupPolicyAssignmentNonComplianceMessage>)
//  .notScopes(java.util.List<java.lang.String>)
//  .parameters(java.lang.String)
//  .timeouts(ResourceGroupPolicyAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.nonComplianceMessage">nonComplianceMessage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>></code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.notScopes">notScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}.

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.identity"></a>

```java
public ResourceGroupPolicyAssignmentIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#identity ResourceGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}.

---

##### `nonComplianceMessage`<sup>Optional</sup> <a name="nonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```java
public java.lang.Object getNonComplianceMessage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>>

non_compliance_message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#non_compliance_message ResourceGroupPolicyAssignment#non_compliance_message}

---

##### `notScopes`<sup>Optional</sup> <a name="notScopes" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.notScopes"></a>

```java
public java.util.List<java.lang.String> getNotScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentConfig.property.timeouts"></a>

```java
public ResourceGroupPolicyAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#timeouts ResourceGroupPolicyAssignment#timeouts}

---

### ResourceGroupPolicyAssignmentIdentity <a name="ResourceGroupPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentIdentity;

ResourceGroupPolicyAssignmentIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#type ResourceGroupPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#identity_ids ResourceGroupPolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#type ResourceGroupPolicyAssignment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#identity_ids ResourceGroupPolicyAssignment#identity_ids}.

---

### ResourceGroupPolicyAssignmentNonComplianceMessage <a name="ResourceGroupPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentNonComplianceMessage;

ResourceGroupPolicyAssignmentNonComplianceMessage.builder()
    .content(java.lang.String)
//  .policyDefinitionReferenceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#content ResourceGroupPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_reference_id ResourceGroupPolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#content ResourceGroupPolicyAssignment#content}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```java
public java.lang.String getPolicyDefinitionReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#policy_definition_reference_id ResourceGroupPolicyAssignment#policy_definition_reference_id}.

---

### ResourceGroupPolicyAssignmentTimeouts <a name="ResourceGroupPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentTimeouts;

ResourceGroupPolicyAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#create ResourceGroupPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#delete ResourceGroupPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#read ResourceGroupPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#update ResourceGroupPolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#create ResourceGroupPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#delete ResourceGroupPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#read ResourceGroupPolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment#update ResourceGroupPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyAssignmentIdentityOutputReference <a name="ResourceGroupPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentIdentityOutputReference;

new ResourceGroupPolicyAssignmentIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```java
public ResourceGroupPolicyAssignmentIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentIdentity">ResourceGroupPolicyAssignmentIdentity</a>

---


### ResourceGroupPolicyAssignmentNonComplianceMessageList <a name="ResourceGroupPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentNonComplianceMessageList;

new ResourceGroupPolicyAssignmentNonComplianceMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get"></a>

```java
public ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a>>

---


### ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference <a name="ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference;

new ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```java
public void resetPolicyDefinitionReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```java
public java.lang.String getPolicyDefinitionReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```java
public java.lang.String getPolicyDefinitionReferenceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentNonComplianceMessage">ResourceGroupPolicyAssignmentNonComplianceMessage</a> OR com.hashicorp.cdktf.IResolvable

---


### ResourceGroupPolicyAssignmentTimeoutsOutputReference <a name="ResourceGroupPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_policy_assignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference;

new ResourceGroupPolicyAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupPolicyAssignment.ResourceGroupPolicyAssignmentTimeouts">ResourceGroupPolicyAssignmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



