# `managementGroupPolicySetDefinition` Submodule <a name="`managementGroupPolicySetDefinition` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicySetDefinition <a name="ManagementGroupPolicySetDefinition" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition azurerm_management_group_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinition;

ManagementGroupPolicySetDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyDefinitionReference(IResolvable)
    .policyDefinitionReference(java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionReference>)
    .policyType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
//  .policyDefinitionGroup(IResolvable)
//  .policyDefinitionGroup(java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionGroup>)
//  .timeouts(ManagementGroupPolicySetDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#management_group_id ManagementGroupPolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyDefinitionReference">policyDefinitionReference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>></code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_type ManagementGroupPolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#id ManagementGroupPolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#metadata ManagementGroupPolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameters ManagementGroupPolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>></code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}.

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#management_group_id ManagementGroupPolicySetDefinition#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}.

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyDefinitionReference"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>>

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_reference ManagementGroupPolicySetDefinition#policy_definition_reference}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_type ManagementGroupPolicySetDefinition#policy_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#id ManagementGroupPolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#metadata ManagementGroupPolicySetDefinition#metadata}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameters ManagementGroupPolicySetDefinition#parameters}.

---

##### `policyDefinitionGroup`<sup>Optional</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.policyDefinitionGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>>

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_group ManagementGroupPolicySetDefinition#policy_definition_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#timeouts ManagementGroupPolicySetDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionGroup">putPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionReference">putPolicyDefinitionReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetPolicyDefinitionGroup">resetPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDefinitionGroup` <a name="putPolicyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionGroup"></a>

```java
public void putPolicyDefinitionGroup(IResolvable OR java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>>

---

##### `putPolicyDefinitionReference` <a name="putPolicyDefinitionReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionReference"></a>

```java
public void putPolicyDefinitionReference(IResolvable OR java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionReference> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putPolicyDefinitionReference.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putTimeouts"></a>

```java
public void putTimeouts(ManagementGroupPolicySetDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicyDefinitionGroup` <a name="resetPolicyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetPolicyDefinitionGroup"></a>

```java
public void resetPolicyDefinitionGroup()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupPolicySetDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinition;

ManagementGroupPolicySetDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinition;

ManagementGroupPolicySetDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinition;

ManagementGroupPolicySetDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinition;

ManagementGroupPolicySetDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagementGroupPolicySetDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagementGroupPolicySetDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagementGroupPolicySetDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagementGroupPolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupPolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList">ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList">ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference">ManagementGroupPolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionGroupInput">policyDefinitionGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionReferenceInput">policyDefinitionReferenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyDefinitionGroup`<sup>Required</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionGroup"></a>

```java
public ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList getPolicyDefinitionGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList">ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionReference"></a>

```java
public ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList getPolicyDefinitionReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList">ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.timeouts"></a>

```java
public ManagementGroupPolicySetDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference">ManagementGroupPolicySetDefinitionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionGroupInput`<sup>Optional</sup> <a name="policyDefinitionGroupInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionGroupInput"></a>

```java
public java.lang.Object getPolicyDefinitionGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>>

---

##### `policyDefinitionReferenceInput`<sup>Optional</sup> <a name="policyDefinitionReferenceInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyDefinitionReferenceInput"></a>

```java
public java.lang.Object getPolicyDefinitionReferenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>>

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicySetDefinitionConfig <a name="ManagementGroupPolicySetDefinitionConfig" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionConfig;

ManagementGroupPolicySetDefinitionConfig.builder()
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
    .displayName(java.lang.String)
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyDefinitionReference(IResolvable)
    .policyDefinitionReference(java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionReference>)
    .policyType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
//  .policyDefinitionGroup(IResolvable)
//  .policyDefinitionGroup(java.util.List<ManagementGroupPolicySetDefinitionPolicyDefinitionGroup>)
//  .timeouts(ManagementGroupPolicySetDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#management_group_id ManagementGroupPolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>></code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_type ManagementGroupPolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#id ManagementGroupPolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#metadata ManagementGroupPolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameters ManagementGroupPolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>></code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}.

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#management_group_id ManagementGroupPolicySetDefinition#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}.

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyDefinitionReference"></a>

```java
public java.lang.Object getPolicyDefinitionReference();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>>

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_reference ManagementGroupPolicySetDefinition#policy_definition_reference}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_type ManagementGroupPolicySetDefinition#policy_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#id ManagementGroupPolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#metadata ManagementGroupPolicySetDefinition#metadata}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameters ManagementGroupPolicySetDefinition#parameters}.

---

##### `policyDefinitionGroup`<sup>Optional</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.policyDefinitionGroup"></a>

```java
public java.lang.Object getPolicyDefinitionGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>>

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_group ManagementGroupPolicySetDefinition#policy_definition_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionConfig.property.timeouts"></a>

```java
public ManagementGroupPolicySetDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#timeouts ManagementGroupPolicySetDefinition#timeouts}

---

### ManagementGroupPolicySetDefinitionPolicyDefinitionGroup <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup;

ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.builder()
    .name(java.lang.String)
//  .additionalMetadataResourceId(java.lang.String)
//  .category(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#additional_metadata_resource_id ManagementGroupPolicySetDefinition#additional_metadata_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#category ManagementGroupPolicySetDefinition#category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#name ManagementGroupPolicySetDefinition#name}.

---

##### `additionalMetadataResourceId`<sup>Optional</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId"></a>

```java
public java.lang.String getAdditionalMetadataResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#additional_metadata_resource_id ManagementGroupPolicySetDefinition#additional_metadata_resource_id}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#category ManagementGroupPolicySetDefinition#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#description ManagementGroupPolicySetDefinition#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#display_name ManagementGroupPolicySetDefinition#display_name}.

---

### ManagementGroupPolicySetDefinitionPolicyDefinitionReference <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference;

ManagementGroupPolicySetDefinitionPolicyDefinitionReference.builder()
    .policyDefinitionId(java.lang.String)
//  .parameterValues(java.lang.String)
//  .policyGroupNames(java.util.List<java.lang.String>)
//  .referenceId(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_id ManagementGroupPolicySetDefinition#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.parameterValues">parameterValues</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameter_values ManagementGroupPolicySetDefinition#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames">policyGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_group_names ManagementGroupPolicySetDefinition#policy_group_names}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#reference_id ManagementGroupPolicySetDefinition#reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#version ManagementGroupPolicySetDefinition#version}. |

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_definition_id ManagementGroupPolicySetDefinition#policy_definition_id}.

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.parameterValues"></a>

```java
public java.lang.String getParameterValues();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#parameter_values ManagementGroupPolicySetDefinition#parameter_values}.

---

##### `policyGroupNames`<sup>Optional</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#policy_group_names ManagementGroupPolicySetDefinition#policy_group_names}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#reference_id ManagementGroupPolicySetDefinition#reference_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#version ManagementGroupPolicySetDefinition#version}.

---

### ManagementGroupPolicySetDefinitionTimeouts <a name="ManagementGroupPolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionTimeouts;

ManagementGroupPolicySetDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#create ManagementGroupPolicySetDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#delete ManagementGroupPolicySetDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#read ManagementGroupPolicySetDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#update ManagementGroupPolicySetDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#create ManagementGroupPolicySetDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#delete ManagementGroupPolicySetDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#read ManagementGroupPolicySetDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/management_group_policy_set_definition#update ManagementGroupPolicySetDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList;

new ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```java
public ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>>

---


### ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference;

new ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId">resetAdditionalMetadataResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalMetadataResourceId` <a name="resetAdditionalMetadataResourceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId"></a>

```java
public void resetAdditionalMetadataResourceId()
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput">additionalMetadataResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalMetadataResourceIdInput`<sup>Optional</sup> <a name="additionalMetadataResourceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput"></a>

```java
public java.lang.String getAdditionalMetadataResourceIdInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `additionalMetadataResourceId`<sup>Required</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```java
public java.lang.String getAdditionalMetadataResourceId();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionGroup">ManagementGroupPolicySetDefinitionPolicyDefinitionGroup</a>

---


### ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList;

new ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```java
public ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>>

---


### ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference;

new ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames">resetPolicyGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues"></a>

```java
public void resetParameterValues()
```

##### `resetPolicyGroupNames` <a name="resetPolicyGroupNames" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames"></a>

```java
public void resetPolicyGroupNames()
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId"></a>

```java
public void resetReferenceId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput">parameterValuesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput">policyGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">parameterValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">policyGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput"></a>

```java
public java.lang.String getParameterValuesInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput"></a>

```java
public java.lang.String getPolicyDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `policyGroupNamesInput`<sup>Optional</sup> <a name="policyGroupNamesInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput"></a>

```java
public java.lang.String getReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```java
public java.lang.String getParameterValues();
```

- *Type:* java.lang.String

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

---

##### `policyGroupNames`<sup>Required</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionPolicyDefinitionReference">ManagementGroupPolicySetDefinitionPolicyDefinitionReference</a>

---


### ManagementGroupPolicySetDefinitionTimeoutsOutputReference <a name="ManagementGroupPolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_set_definition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference;

new ManagementGroupPolicySetDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicySetDefinition.ManagementGroupPolicySetDefinitionTimeouts">ManagementGroupPolicySetDefinitionTimeouts</a>

---



