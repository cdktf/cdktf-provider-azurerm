# `azurerm_policy_set_definition`

Refer to the Terraform Registory for docs: [`azurerm_policy_set_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition).

# `policySetDefinition` Submodule <a name="`policySetDefinition` Submodule" id="@cdktf/provider-azurerm.policySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySetDefinition <a name="PolicySetDefinition" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinition;

PolicySetDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .policyDefinitionReference(IResolvable)
    .policyDefinitionReference(java.util.List<PolicySetDefinitionPolicyDefinitionReference>)
    .policyType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .managementGroupId(java.lang.String)
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
//  .policyDefinitionGroup(IResolvable)
//  .policyDefinitionGroup(java.util.List<PolicySetDefinitionPolicyDefinitionGroup>)
//  .timeouts(PolicySetDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyDefinitionReference">policyDefinitionReference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>></code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>></code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyDefinitionReference"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>>

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_reference PolicySetDefinition#policy_definition_reference}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementGroupId`<sup>Optional</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}.

---

##### `policyDefinitionGroup`<sup>Optional</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.policyDefinitionGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>>

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_group PolicySetDefinition#policy_definition_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#timeouts PolicySetDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup">putPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference">putPolicyDefinitionReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId">resetManagementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup">resetPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicyDefinitionGroup` <a name="putPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup"></a>

```java
public void putPolicyDefinitionGroup(IResolvable OR java.util.List<PolicySetDefinitionPolicyDefinitionGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>>

---

##### `putPolicyDefinitionReference` <a name="putPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference"></a>

```java
public void putPolicyDefinitionReference(IResolvable OR java.util.List<PolicySetDefinitionPolicyDefinitionReference> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts"></a>

```java
public void putTimeouts(PolicySetDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetManagementGroupId` <a name="resetManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId"></a>

```java
public void resetManagementGroupId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicyDefinitionGroup` <a name="resetPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup"></a>

```java
public void resetPolicyDefinitionGroup()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinition;

PolicySetDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinition;

PolicySetDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinition;

PolicySetDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput">policyDefinitionGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput">policyDefinitionReferenceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyDefinitionGroup`<sup>Required</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup"></a>

```java
public PolicySetDefinitionPolicyDefinitionGroupList getPolicyDefinitionGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference"></a>

```java
public PolicySetDefinitionPolicyDefinitionReferenceList getPolicyDefinitionReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts"></a>

```java
public PolicySetDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionGroupInput`<sup>Optional</sup> <a name="policyDefinitionGroupInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput"></a>

```java
public java.lang.Object getPolicyDefinitionGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>>

---

##### `policyDefinitionReferenceInput`<sup>Optional</sup> <a name="policyDefinitionReferenceInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput"></a>

```java
public java.lang.Object getPolicyDefinitionReferenceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>>

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetDefinitionConfig <a name="PolicySetDefinitionConfig" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionConfig;

PolicySetDefinitionConfig.builder()
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
    .name(java.lang.String)
    .policyDefinitionReference(IResolvable)
    .policyDefinitionReference(java.util.List<PolicySetDefinitionPolicyDefinitionReference>)
    .policyType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .managementGroupId(java.lang.String)
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
//  .policyDefinitionGroup(IResolvable)
//  .policyDefinitionGroup(java.util.List<PolicySetDefinitionPolicyDefinitionGroup>)
//  .timeouts(PolicySetDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>></code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>></code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference"></a>

```java
public java.lang.Object getPolicyDefinitionReference();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>>

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_reference PolicySetDefinition#policy_definition_reference}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementGroupId`<sup>Optional</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}.

---

##### `policyDefinitionGroup`<sup>Optional</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup"></a>

```java
public java.lang.Object getPolicyDefinitionGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>>

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_group PolicySetDefinition#policy_definition_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts"></a>

```java
public PolicySetDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#timeouts PolicySetDefinition#timeouts}

---

### PolicySetDefinitionPolicyDefinitionGroup <a name="PolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionGroup;

PolicySetDefinitionPolicyDefinitionGroup.builder()
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
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `additionalMetadataResourceId`<sup>Optional</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId"></a>

```java
public java.lang.String getAdditionalMetadataResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

### PolicySetDefinitionPolicyDefinitionReference <a name="PolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionReference;

PolicySetDefinitionPolicyDefinitionReference.builder()
    .policyDefinitionId(java.lang.String)
//  .parameterValues(java.lang.String)
//  .policyGroupNames(java.util.List<java.lang.String>)
//  .referenceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues">parameterValues</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames">policyGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}. |

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}.

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues"></a>

```java
public java.lang.String getParameterValues();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}.

---

##### `policyGroupNames`<sup>Optional</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}.

---

### PolicySetDefinitionTimeouts <a name="PolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionTimeouts;

PolicySetDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetDefinitionPolicyDefinitionGroupList <a name="PolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionGroupList;

new PolicySetDefinitionPolicyDefinitionGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```java
public PolicySetDefinitionPolicyDefinitionGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>>

---


### PolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="PolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionGroupOutputReference;

new PolicySetDefinitionPolicyDefinitionGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId">resetAdditionalMetadataResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalMetadataResourceId` <a name="resetAdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId"></a>

```java
public void resetAdditionalMetadataResourceId()
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput">additionalMetadataResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalMetadataResourceIdInput`<sup>Optional</sup> <a name="additionalMetadataResourceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput"></a>

```java
public java.lang.String getAdditionalMetadataResourceIdInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `additionalMetadataResourceId`<sup>Required</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```java
public java.lang.String getAdditionalMetadataResourceId();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>

---


### PolicySetDefinitionPolicyDefinitionReferenceList <a name="PolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionReferenceList;

new PolicySetDefinitionPolicyDefinitionReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```java
public PolicySetDefinitionPolicyDefinitionReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>>

---


### PolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="PolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference;

new PolicySetDefinitionPolicyDefinitionReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames">resetPolicyGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues"></a>

```java
public void resetParameterValues()
```

##### `resetPolicyGroupNames` <a name="resetPolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames"></a>

```java
public void resetPolicyGroupNames()
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId"></a>

```java
public void resetReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput">parameterValuesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput">policyGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">parameterValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">policyGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput"></a>

```java
public java.lang.String getParameterValuesInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput"></a>

```java
public java.lang.String getPolicyDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `policyGroupNamesInput`<sup>Optional</sup> <a name="policyGroupNamesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput"></a>

```java
public java.lang.String getReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```java
public java.lang.String getParameterValues();
```

- *Type:* java.lang.String

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

---

##### `policyGroupNames`<sup>Required</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```java
public java.util.List<java.lang.String> getPolicyGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>

---


### PolicySetDefinitionTimeoutsOutputReference <a name="PolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_set_definition.PolicySetDefinitionTimeoutsOutputReference;

new PolicySetDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---



