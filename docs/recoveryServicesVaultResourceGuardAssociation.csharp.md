# `azurerm_recovery_services_vault_resource_guard_association`

Refer to the Terraform Registory for docs: [`azurerm_recovery_services_vault_resource_guard_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association).

# `recoveryServicesVaultResourceGuardAssociation` Submodule <a name="`recoveryServicesVaultResourceGuardAssociation` Submodule" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVaultResourceGuardAssociation <a name="RecoveryServicesVaultResourceGuardAssociation" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association azurerm_recovery_services_vault_resource_guard_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RecoveryServicesVaultResourceGuardAssociation(Construct Scope, string Id, RecoveryServicesVaultResourceGuardAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig">RecoveryServicesVaultResourceGuardAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig">RecoveryServicesVaultResourceGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(RecoveryServicesVaultResourceGuardAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RecoveryServicesVaultResourceGuardAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RecoveryServicesVaultResourceGuardAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RecoveryServicesVaultResourceGuardAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput">ResourceGuardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId">ResourceGuardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts"></a>

```csharp
public RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGuardIdInput`<sup>Optional</sup> <a name="ResourceGuardIdInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput"></a>

```csharp
public string ResourceGuardIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGuardId`<sup>Required</sup> <a name="ResourceGuardId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId"></a>

```csharp
public string ResourceGuardId { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultResourceGuardAssociationConfig <a name="RecoveryServicesVaultResourceGuardAssociationConfig" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RecoveryServicesVaultResourceGuardAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGuardId,
    string VaultId,
    string Id = null,
    RecoveryServicesVaultResourceGuardAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#name RecoveryServicesVaultResourceGuardAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId">ResourceGuardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#name RecoveryServicesVaultResourceGuardAssociation#name}.

---

##### `ResourceGuardId`<sup>Required</sup> <a name="ResourceGuardId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId"></a>

```csharp
public string ResourceGuardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts"></a>

```csharp
public RecoveryServicesVaultResourceGuardAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#timeouts RecoveryServicesVaultResourceGuardAssociation#timeouts}

---

### RecoveryServicesVaultResourceGuardAssociationTimeouts <a name="RecoveryServicesVaultResourceGuardAssociationTimeouts" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RecoveryServicesVaultResourceGuardAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference <a name="RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



