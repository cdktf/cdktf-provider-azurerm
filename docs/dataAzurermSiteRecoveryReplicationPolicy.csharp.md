# `data_azurerm_site_recovery_replication_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_site_recovery_replication_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy).

# `dataAzurermSiteRecoveryReplicationPolicy` Submodule <a name="`dataAzurermSiteRecoveryReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSiteRecoveryReplicationPolicy <a name="DataAzurermSiteRecoveryReplicationPolicy" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy azurerm_site_recovery_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSiteRecoveryReplicationPolicy(Construct Scope, string Id, DataAzurermSiteRecoveryReplicationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig">DataAzurermSiteRecoveryReplicationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig">DataAzurermSiteRecoveryReplicationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSiteRecoveryReplicationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts">DataAzurermSiteRecoveryReplicationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSiteRecoveryReplicationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSiteRecoveryReplicationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSiteRecoveryReplicationPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes">ApplicationConsistentSnapshotFrequencyInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutes">RecoveryPointRetentionInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference">DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationConsistentSnapshotFrequencyInMinutes`<sup>Required</sup> <a name="ApplicationConsistentSnapshotFrequencyInMinutes" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes"></a>

```csharp
public double ApplicationConsistentSnapshotFrequencyInMinutes { get; }
```

- *Type:* double

---

##### `RecoveryPointRetentionInMinutes`<sup>Required</sup> <a name="RecoveryPointRetentionInMinutes" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutes"></a>

```csharp
public double RecoveryPointRetentionInMinutes { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.timeouts"></a>

```csharp
public DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference">DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSiteRecoveryReplicationPolicyConfig <a name="DataAzurermSiteRecoveryReplicationPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSiteRecoveryReplicationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RecoveryVaultName,
    string ResourceGroupName,
    string Id = null,
    DataAzurermSiteRecoveryReplicationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#name DataAzurermSiteRecoveryReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#recovery_vault_name DataAzurermSiteRecoveryReplicationPolicy#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#resource_group_name DataAzurermSiteRecoveryReplicationPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#id DataAzurermSiteRecoveryReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts">DataAzurermSiteRecoveryReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#name DataAzurermSiteRecoveryReplicationPolicy#name}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#recovery_vault_name DataAzurermSiteRecoveryReplicationPolicy#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#resource_group_name DataAzurermSiteRecoveryReplicationPolicy#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#id DataAzurermSiteRecoveryReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyConfig.property.timeouts"></a>

```csharp
public DataAzurermSiteRecoveryReplicationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts">DataAzurermSiteRecoveryReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#timeouts DataAzurermSiteRecoveryReplicationPolicy#timeouts}

---

### DataAzurermSiteRecoveryReplicationPolicyTimeouts <a name="DataAzurermSiteRecoveryReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSiteRecoveryReplicationPolicyTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#read DataAzurermSiteRecoveryReplicationPolicy#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/site_recovery_replication_policy#read DataAzurermSiteRecoveryReplicationPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference <a name="DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryReplicationPolicy.DataAzurermSiteRecoveryReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



