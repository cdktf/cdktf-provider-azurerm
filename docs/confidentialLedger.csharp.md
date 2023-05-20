# `azurerm_confidential_ledger`

Refer to the Terraform Registory for docs: [`azurerm_confidential_ledger`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger).

# `confidentialLedger` Submodule <a name="`confidentialLedger` Submodule" id="@cdktf/provider-azurerm.confidentialLedger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfidentialLedger <a name="ConfidentialLedger" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger azurerm_confidential_ledger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedger(Construct Scope, string Id, ConfidentialLedgerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig">ConfidentialLedgerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig">ConfidentialLedgerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal">PutAzureadBasedServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal">PutCertificateBasedSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetCertificateBasedSecurityPrincipal">ResetCertificateBasedSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAzureadBasedServicePrincipal` <a name="PutAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal"></a>

```csharp
private void PutAzureadBasedServicePrincipal(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putAzureadBasedServicePrincipal.parameter.value"></a>

- *Type:* object

---

##### `PutCertificateBasedSecurityPrincipal` <a name="PutCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal"></a>

```csharp
private void PutCertificateBasedSecurityPrincipal(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putCertificateBasedSecurityPrincipal.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfidentialLedgerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

---

##### `ResetCertificateBasedSecurityPrincipal` <a name="ResetCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetCertificateBasedSecurityPrincipal"></a>

```csharp
private void ResetCertificateBasedSecurityPrincipal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConfidentialLedger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConfidentialLedger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ConfidentialLedger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipal">AzureadBasedServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList">ConfidentialLedgerAzureadBasedServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipal">CertificateBasedSecurityPrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList">ConfidentialLedgerCertificateBasedSecurityPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.identityServiceEndpoint">IdentityServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerEndpoint">LedgerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference">ConfidentialLedgerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipalInput">AzureadBasedServicePrincipalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipalInput">CertificateBasedSecurityPrincipalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerTypeInput">LedgerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerType">LedgerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureadBasedServicePrincipal`<sup>Required</sup> <a name="AzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipal"></a>

```csharp
public ConfidentialLedgerAzureadBasedServicePrincipalList AzureadBasedServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList">ConfidentialLedgerAzureadBasedServicePrincipalList</a>

---

##### `CertificateBasedSecurityPrincipal`<sup>Required</sup> <a name="CertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipal"></a>

```csharp
public ConfidentialLedgerCertificateBasedSecurityPrincipalList CertificateBasedSecurityPrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList">ConfidentialLedgerCertificateBasedSecurityPrincipalList</a>

---

##### `IdentityServiceEndpoint`<sup>Required</sup> <a name="IdentityServiceEndpoint" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.identityServiceEndpoint"></a>

```csharp
public string IdentityServiceEndpoint { get; }
```

- *Type:* string

---

##### `LedgerEndpoint`<sup>Required</sup> <a name="LedgerEndpoint" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerEndpoint"></a>

```csharp
public string LedgerEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeouts"></a>

```csharp
public ConfidentialLedgerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference">ConfidentialLedgerTimeoutsOutputReference</a>

---

##### `AzureadBasedServicePrincipalInput`<sup>Optional</sup> <a name="AzureadBasedServicePrincipalInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.azureadBasedServicePrincipalInput"></a>

```csharp
public object AzureadBasedServicePrincipalInput { get; }
```

- *Type:* object

---

##### `CertificateBasedSecurityPrincipalInput`<sup>Optional</sup> <a name="CertificateBasedSecurityPrincipalInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.certificateBasedSecurityPrincipalInput"></a>

```csharp
public object CertificateBasedSecurityPrincipalInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LedgerTypeInput`<sup>Optional</sup> <a name="LedgerTypeInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerTypeInput"></a>

```csharp
public string LedgerTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LedgerType`<sup>Required</sup> <a name="LedgerType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.ledgerType"></a>

```csharp
public string LedgerType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfidentialLedgerAzureadBasedServicePrincipal <a name="ConfidentialLedgerAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerAzureadBasedServicePrincipal {
    string LedgerRoleName,
    string PrincipalId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.ledgerRoleName">LedgerRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#principal_id ConfidentialLedger#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#tenant_id ConfidentialLedger#tenant_id}. |

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.ledgerRoleName"></a>

```csharp
public string LedgerRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#principal_id ConfidentialLedger#principal_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#tenant_id ConfidentialLedger#tenant_id}.

---

### ConfidentialLedgerCertificateBasedSecurityPrincipal <a name="ConfidentialLedgerCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerCertificateBasedSecurityPrincipal {
    string LedgerRoleName,
    string PemPublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.ledgerRoleName">LedgerRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.pemPublicKey">PemPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#pem_public_key ConfidentialLedger#pem_public_key}. |

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.ledgerRoleName"></a>

```csharp
public string LedgerRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_role_name ConfidentialLedger#ledger_role_name}.

---

##### `PemPublicKey`<sup>Required</sup> <a name="PemPublicKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipal.property.pemPublicKey"></a>

```csharp
public string PemPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#pem_public_key ConfidentialLedger#pem_public_key}.

---

### ConfidentialLedgerConfig <a name="ConfidentialLedgerConfig" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AzureadBasedServicePrincipal,
    string LedgerType,
    string Location,
    string Name,
    string ResourceGroupName,
    object CertificateBasedSecurityPrincipal = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ConfidentialLedgerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.azureadBasedServicePrincipal">AzureadBasedServicePrincipal</a></code> | <code>object</code> | azuread_based_service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.ledgerType">LedgerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.certificateBasedSecurityPrincipal">CertificateBasedSecurityPrincipal</a></code> | <code>object</code> | certificate_based_security_principal block. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AzureadBasedServicePrincipal`<sup>Required</sup> <a name="AzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.azureadBasedServicePrincipal"></a>

```csharp
public object AzureadBasedServicePrincipal { get; set; }
```

- *Type:* object

azuread_based_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#azuread_based_service_principal ConfidentialLedger#azuread_based_service_principal}

---

##### `LedgerType`<sup>Required</sup> <a name="LedgerType" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.ledgerType"></a>

```csharp
public string LedgerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#ledger_type ConfidentialLedger#ledger_type}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#location ConfidentialLedger#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#name ConfidentialLedger#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#resource_group_name ConfidentialLedger#resource_group_name}.

---

##### `CertificateBasedSecurityPrincipal`<sup>Optional</sup> <a name="CertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.certificateBasedSecurityPrincipal"></a>

```csharp
public object CertificateBasedSecurityPrincipal { get; set; }
```

- *Type:* object

certificate_based_security_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#certificate_based_security_principal ConfidentialLedger#certificate_based_security_principal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#id ConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#tags ConfidentialLedger#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerConfig.property.timeouts"></a>

```csharp
public ConfidentialLedgerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts">ConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#timeouts ConfidentialLedger#timeouts}

---

### ConfidentialLedgerTimeouts <a name="ConfidentialLedgerTimeouts" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#create ConfidentialLedger#create}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#delete ConfidentialLedger#delete}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#read ConfidentialLedger#read}. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#update ConfidentialLedger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#create ConfidentialLedger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#delete ConfidentialLedger#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#read ConfidentialLedger#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/confidential_ledger#update ConfidentialLedger#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfidentialLedgerAzureadBasedServicePrincipalList <a name="ConfidentialLedgerAzureadBasedServicePrincipalList" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerAzureadBasedServicePrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get"></a>

```csharp
private ConfidentialLedgerAzureadBasedServicePrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfidentialLedgerAzureadBasedServicePrincipalOutputReference <a name="ConfidentialLedgerAzureadBasedServicePrincipalOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerAzureadBasedServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleNameInput">LedgerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName">LedgerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LedgerRoleNameInput`<sup>Optional</sup> <a name="LedgerRoleNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleNameInput"></a>

```csharp
public string LedgerRoleNameInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName"></a>

```csharp
public string LedgerRoleName { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfidentialLedgerCertificateBasedSecurityPrincipalList <a name="ConfidentialLedgerCertificateBasedSecurityPrincipalList" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerCertificateBasedSecurityPrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get"></a>

```csharp
private ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference <a name="ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleNameInput">LedgerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKeyInput">PemPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName">LedgerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey">PemPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LedgerRoleNameInput`<sup>Optional</sup> <a name="LedgerRoleNameInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleNameInput"></a>

```csharp
public string LedgerRoleNameInput { get; }
```

- *Type:* string

---

##### `PemPublicKeyInput`<sup>Optional</sup> <a name="PemPublicKeyInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKeyInput"></a>

```csharp
public string PemPublicKeyInput { get; }
```

- *Type:* string

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName"></a>

```csharp
public string LedgerRoleName { get; }
```

- *Type:* string

---

##### `PemPublicKey`<sup>Required</sup> <a name="PemPublicKey" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey"></a>

```csharp
public string PemPublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfidentialLedgerTimeoutsOutputReference <a name="ConfidentialLedgerTimeoutsOutputReference" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ConfidentialLedgerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.confidentialLedger.ConfidentialLedgerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



