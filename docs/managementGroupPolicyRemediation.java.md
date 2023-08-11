# `azurerm_management_group_policy_remediation`

Refer to the Terraform Registory for docs: [`azurerm_management_group_policy_remediation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation).

# `managementGroupPolicyRemediation` Submodule <a name="`managementGroupPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyRemediation <a name="ManagementGroupPolicyRemediation" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation azurerm_management_group_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediation;

ManagementGroupPolicyRemediation.Builder.create(Construct scope, java.lang.String id)
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
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
//  .failurePercentage(java.lang.Number)
//  .id(java.lang.String)
//  .locationFilters(java.util.List<java.lang.String>)
//  .parallelDeployments(java.lang.Number)
//  .policyDefinitionId(java.lang.String)
//  .policyDefinitionReferenceId(java.lang.String)
//  .resourceCount(java.lang.Number)
//  .resourceDiscoveryMode(java.lang.String)
//  .timeouts(ManagementGroupPolicyRemediationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.locationFilters">locationFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.parallelDeployments">parallelDeployments</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_id ManagementGroupPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.resourceCount">resourceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_discovery_mode ManagementGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.managementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyAssignmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.failurePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationFilters`<sup>Optional</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.locationFilters"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}.

---

##### `parallelDeployments`<sup>Optional</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.parallelDeployments"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}.

---

##### `policyDefinitionId`<sup>Optional</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyDefinitionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_id ManagementGroupPolicyRemediation#policy_definition_id}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.policyDefinitionReferenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `resourceCount`<sup>Optional</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.resourceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}.

---

##### `resourceDiscoveryMode`<sup>Optional</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.resourceDiscoveryMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_discovery_mode ManagementGroupPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#timeouts ManagementGroupPolicyRemediation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetFailurePercentage">resetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetLocationFilters">resetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetParallelDeployments">resetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionId">resetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionReferenceId">resetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceCount">resetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceDiscoveryMode">resetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts"></a>

```java
public void putTimeouts(ManagementGroupPolicyRemediationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

---

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetFailurePercentage"></a>

```java
public void resetFailurePercentage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetId"></a>

```java
public void resetId()
```

##### `resetLocationFilters` <a name="resetLocationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetLocationFilters"></a>

```java
public void resetLocationFilters()
```

##### `resetParallelDeployments` <a name="resetParallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetParallelDeployments"></a>

```java
public void resetParallelDeployments()
```

##### `resetPolicyDefinitionId` <a name="resetPolicyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionId"></a>

```java
public void resetPolicyDefinitionId()
```

##### `resetPolicyDefinitionReferenceId` <a name="resetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```java
public void resetPolicyDefinitionReferenceId()
```

##### `resetResourceCount` <a name="resetResourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceCount"></a>

```java
public void resetResourceCount()
```

##### `resetResourceDiscoveryMode` <a name="resetResourceDiscoveryMode" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceDiscoveryMode"></a>

```java
public void resetResourceDiscoveryMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediation;

ManagementGroupPolicyRemediation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediation;

ManagementGroupPolicyRemediation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediation;

ManagementGroupPolicyRemediation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference">ManagementGroupPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentageInput">failurePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFiltersInput">locationFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeploymentsInput">parallelDeploymentsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentIdInput">policyAssignmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceIdInput">policyDefinitionReferenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCountInput">resourceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceDiscoveryModeInput">resourceDiscoveryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFilters">locationFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeployments">parallelDeployments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCount">resourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeouts"></a>

```java
public ManagementGroupPolicyRemediationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference">ManagementGroupPolicyRemediationTimeoutsOutputReference</a>

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentageInput"></a>

```java
public java.lang.Number getFailurePercentageInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationFiltersInput`<sup>Optional</sup> <a name="locationFiltersInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFiltersInput"></a>

```java
public java.util.List<java.lang.String> getLocationFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupIdInput"></a>

```java
public java.lang.String getManagementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parallelDeploymentsInput`<sup>Optional</sup> <a name="parallelDeploymentsInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeploymentsInput"></a>

```java
public java.lang.Number getParallelDeploymentsInput();
```

- *Type:* java.lang.Number

---

##### `policyAssignmentIdInput`<sup>Optional</sup> <a name="policyAssignmentIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentIdInput"></a>

```java
public java.lang.String getPolicyAssignmentIdInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionIdInput"></a>

```java
public java.lang.String getPolicyDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="policyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```java
public java.lang.String getPolicyDefinitionReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceCountInput`<sup>Optional</sup> <a name="resourceCountInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCountInput"></a>

```java
public java.lang.Number getResourceCountInput();
```

- *Type:* java.lang.Number

---

##### `resourceDiscoveryModeInput`<sup>Optional</sup> <a name="resourceDiscoveryModeInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```java
public java.lang.String getResourceDiscoveryModeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentage"></a>

```java
public java.lang.Number getFailurePercentage();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationFilters`<sup>Required</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFilters"></a>

```java
public java.util.List<java.lang.String> getLocationFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parallelDeployments`<sup>Required</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeployments"></a>

```java
public java.lang.Number getParallelDeployments();
```

- *Type:* java.lang.Number

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

---

##### `policyDefinitionReferenceId`<sup>Required</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceId"></a>

```java
public java.lang.String getPolicyDefinitionReferenceId();
```

- *Type:* java.lang.String

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCount"></a>

```java
public java.lang.Number getResourceCount();
```

- *Type:* java.lang.Number

---

##### `resourceDiscoveryMode`<sup>Required</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceDiscoveryMode"></a>

```java
public java.lang.String getResourceDiscoveryMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyRemediationConfig <a name="ManagementGroupPolicyRemediationConfig" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediationConfig;

ManagementGroupPolicyRemediationConfig.builder()
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
    .managementGroupId(java.lang.String)
    .name(java.lang.String)
    .policyAssignmentId(java.lang.String)
//  .failurePercentage(java.lang.Number)
//  .id(java.lang.String)
//  .locationFilters(java.util.List<java.lang.String>)
//  .parallelDeployments(java.lang.Number)
//  .policyDefinitionId(java.lang.String)
//  .policyDefinitionReferenceId(java.lang.String)
//  .resourceCount(java.lang.Number)
//  .resourceDiscoveryMode(java.lang.String)
//  .timeouts(ManagementGroupPolicyRemediationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.managementGroupId">managementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyAssignmentId">policyAssignmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.locationFilters">locationFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.parallelDeployments">parallelDeployments</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionId">policyDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_id ManagementGroupPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionReferenceId">policyDefinitionReferenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceCount">resourceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceDiscoveryMode">resourceDiscoveryMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_discovery_mode ManagementGroupPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.managementGroupId"></a>

```java
public java.lang.String getManagementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}.

---

##### `policyAssignmentId`<sup>Required</sup> <a name="policyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyAssignmentId"></a>

```java
public java.lang.String getPolicyAssignmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.failurePercentage"></a>

```java
public java.lang.Number getFailurePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationFilters`<sup>Optional</sup> <a name="locationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.locationFilters"></a>

```java
public java.util.List<java.lang.String> getLocationFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}.

---

##### `parallelDeployments`<sup>Optional</sup> <a name="parallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.parallelDeployments"></a>

```java
public java.lang.Number getParallelDeployments();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}.

---

##### `policyDefinitionId`<sup>Optional</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionId"></a>

```java
public java.lang.String getPolicyDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_id ManagementGroupPolicyRemediation#policy_definition_id}.

---

##### `policyDefinitionReferenceId`<sup>Optional</sup> <a name="policyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```java
public java.lang.String getPolicyDefinitionReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `resourceCount`<sup>Optional</sup> <a name="resourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceCount"></a>

```java
public java.lang.Number getResourceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}.

---

##### `resourceDiscoveryMode`<sup>Optional</sup> <a name="resourceDiscoveryMode" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```java
public java.lang.String getResourceDiscoveryMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#resource_discovery_mode ManagementGroupPolicyRemediation#resource_discovery_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.timeouts"></a>

```java
public ManagementGroupPolicyRemediationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#timeouts ManagementGroupPolicyRemediation#timeouts}

---

### ManagementGroupPolicyRemediationTimeouts <a name="ManagementGroupPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediationTimeouts;

ManagementGroupPolicyRemediationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#create ManagementGroupPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#delete ManagementGroupPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#read ManagementGroupPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#update ManagementGroupPolicyRemediation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#create ManagementGroupPolicyRemediation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#delete ManagementGroupPolicyRemediation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#read ManagementGroupPolicyRemediation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/management_group_policy_remediation#update ManagementGroupPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyRemediationTimeoutsOutputReference <a name="ManagementGroupPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.management_group_policy_remediation.ManagementGroupPolicyRemediationTimeoutsOutputReference;

new ManagementGroupPolicyRemediationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

---



