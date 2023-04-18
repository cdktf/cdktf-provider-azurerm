# `azurerm_site_recovery_hyperv_replication_policy`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_hyperv_replication_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy).

# `siteRecoveryHypervReplicationPolicy` Submodule <a name="`siteRecoveryHypervReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervReplicationPolicy <a name="SiteRecoveryHypervReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy azurerm_site_recovery_hyperv_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryHypervReplicationPolicy(Construct Scope, string Id, SiteRecoveryHypervReplicationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig">SiteRecoveryHypervReplicationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig">SiteRecoveryHypervReplicationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(SiteRecoveryHypervReplicationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryHypervReplicationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryHypervReplicationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryHypervReplicationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput">ApplicationConsistentSnapshotFrequencyInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput">RecoveryPointRetentionInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput">RecoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput">ReplicationIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours">ApplicationConsistentSnapshotFrequencyInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours">RecoveryPointRetentionInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds">ReplicationIntervalInSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts"></a>

```csharp
public SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a>

---

##### `ApplicationConsistentSnapshotFrequencyInHoursInput`<sup>Optional</sup> <a name="ApplicationConsistentSnapshotFrequencyInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput"></a>

```csharp
public double ApplicationConsistentSnapshotFrequencyInHoursInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryPointRetentionInHoursInput`<sup>Optional</sup> <a name="RecoveryPointRetentionInHoursInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput"></a>

```csharp
public double RecoveryPointRetentionInHoursInput { get; }
```

- *Type:* double

---

##### `RecoveryVaultIdInput`<sup>Optional</sup> <a name="RecoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput"></a>

```csharp
public string RecoveryVaultIdInput { get; }
```

- *Type:* string

---

##### `ReplicationIntervalInSecondsInput`<sup>Optional</sup> <a name="ReplicationIntervalInSecondsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput"></a>

```csharp
public double ReplicationIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="ApplicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours"></a>

```csharp
public double ApplicationConsistentSnapshotFrequencyInHours { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryPointRetentionInHours`<sup>Required</sup> <a name="RecoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours"></a>

```csharp
public double RecoveryPointRetentionInHours { get; }
```

- *Type:* double

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId"></a>

```csharp
public string RecoveryVaultId { get; }
```

- *Type:* string

---

##### `ReplicationIntervalInSeconds`<sup>Required</sup> <a name="ReplicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds"></a>

```csharp
public double ReplicationIntervalInSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervReplicationPolicyConfig <a name="SiteRecoveryHypervReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryHypervReplicationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ApplicationConsistentSnapshotFrequencyInHours,
    string Name,
    double RecoveryPointRetentionInHours,
    string RecoveryVaultId,
    double ReplicationIntervalInSeconds,
    string Id = null,
    SiteRecoveryHypervReplicationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours">ApplicationConsistentSnapshotFrequencyInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours">RecoveryPointRetentionInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds">ReplicationIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationConsistentSnapshotFrequencyInHours`<sup>Required</sup> <a name="ApplicationConsistentSnapshotFrequencyInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours"></a>

```csharp
public double ApplicationConsistentSnapshotFrequencyInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `RecoveryPointRetentionInHours`<sup>Required</sup> <a name="RecoveryPointRetentionInHours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours"></a>

```csharp
public double RecoveryPointRetentionInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId"></a>

```csharp
public string RecoveryVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `ReplicationIntervalInSeconds`<sup>Required</sup> <a name="ReplicationIntervalInSeconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds"></a>

```csharp
public double ReplicationIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts"></a>

```csharp
public SiteRecoveryHypervReplicationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

### SiteRecoveryHypervReplicationPolicyTimeouts <a name="SiteRecoveryHypervReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryHypervReplicationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



