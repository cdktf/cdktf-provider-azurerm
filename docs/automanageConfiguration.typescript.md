# `azurerm_automanage_configuration`

Refer to the Terraform Registory for docs: [`azurerm_automanage_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration).

# `automanageConfiguration` Submodule <a name="`automanageConfiguration` Submodule" id="@cdktf/provider-azurerm.automanageConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomanageConfiguration <a name="AutomanageConfiguration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration azurerm_automanage_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfiguration(scope: Construct, id: string, config: AutomanageConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware">putAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline">putAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware">resetAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled">resetAutomationAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline">resetAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled">resetBootDiagnosticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled">resetDefenderForCloudEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled">resetGuestConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled">resetLogAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled">resetStatusChangeAlertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAntimalware` <a name="putAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware"></a>

```typescript
public putAntimalware(value: AutomanageConfigurationAntimalware): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `putAzureSecurityBaseline` <a name="putAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline"></a>

```typescript
public putAzureSecurityBaseline(value: AutomanageConfigurationAzureSecurityBaseline): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup"></a>

```typescript
public putBackup(value: AutomanageConfigurationBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomanageConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `resetAntimalware` <a name="resetAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware"></a>

```typescript
public resetAntimalware(): void
```

##### `resetAutomationAccountEnabled` <a name="resetAutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled"></a>

```typescript
public resetAutomationAccountEnabled(): void
```

##### `resetAzureSecurityBaseline` <a name="resetAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline"></a>

```typescript
public resetAzureSecurityBaseline(): void
```

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup"></a>

```typescript
public resetBackup(): void
```

##### `resetBootDiagnosticsEnabled` <a name="resetBootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled"></a>

```typescript
public resetBootDiagnosticsEnabled(): void
```

##### `resetDefenderForCloudEnabled` <a name="resetDefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled"></a>

```typescript
public resetDefenderForCloudEnabled(): void
```

##### `resetGuestConfigurationEnabled` <a name="resetGuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled"></a>

```typescript
public resetGuestConfigurationEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogAnalyticsEnabled` <a name="resetLogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled"></a>

```typescript
public resetLogAnalyticsEnabled(): void
```

##### `resetStatusChangeAlertEnabled` <a name="resetStatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled"></a>

```typescript
public resetStatusChangeAlertEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

automanageConfiguration.AutomanageConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

automanageConfiguration.AutomanageConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

automanageConfiguration.AutomanageConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware">antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline">azureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput">antimalwareInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput">automationAccountEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput">azureSecurityBaselineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput">bootDiagnosticsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput">defenderForCloudEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput">guestConfigurationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput">logAnalyticsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput">statusChangeAlertEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled">automationAccountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled">bootDiagnosticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled">defenderForCloudEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled">logAnalyticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled">statusChangeAlertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `antimalware`<sup>Required</sup> <a name="antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware"></a>

```typescript
public readonly antimalware: AutomanageConfigurationAntimalwareOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a>

---

##### `azureSecurityBaseline`<sup>Required</sup> <a name="azureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline"></a>

```typescript
public readonly azureSecurityBaseline: AutomanageConfigurationAzureSecurityBaselineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup"></a>

```typescript
public readonly backup: AutomanageConfigurationBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: AutomanageConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a>

---

##### `antimalwareInput`<sup>Optional</sup> <a name="antimalwareInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput"></a>

```typescript
public readonly antimalwareInput: AutomanageConfigurationAntimalware;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `automationAccountEnabledInput`<sup>Optional</sup> <a name="automationAccountEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput"></a>

```typescript
public readonly automationAccountEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureSecurityBaselineInput`<sup>Optional</sup> <a name="azureSecurityBaselineInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput"></a>

```typescript
public readonly azureSecurityBaselineInput: AutomanageConfigurationAzureSecurityBaseline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput"></a>

```typescript
public readonly backupInput: AutomanageConfigurationBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `bootDiagnosticsEnabledInput`<sup>Optional</sup> <a name="bootDiagnosticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput"></a>

```typescript
public readonly bootDiagnosticsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defenderForCloudEnabledInput`<sup>Optional</sup> <a name="defenderForCloudEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput"></a>

```typescript
public readonly defenderForCloudEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestConfigurationEnabledInput`<sup>Optional</sup> <a name="guestConfigurationEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput"></a>

```typescript
public readonly guestConfigurationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logAnalyticsEnabledInput`<sup>Optional</sup> <a name="logAnalyticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput"></a>

```typescript
public readonly logAnalyticsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `statusChangeAlertEnabledInput`<sup>Optional</sup> <a name="statusChangeAlertEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput"></a>

```typescript
public readonly statusChangeAlertEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomanageConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `automationAccountEnabled`<sup>Required</sup> <a name="automationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled"></a>

```typescript
public readonly automationAccountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootDiagnosticsEnabled`<sup>Required</sup> <a name="bootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled"></a>

```typescript
public readonly bootDiagnosticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defenderForCloudEnabled`<sup>Required</sup> <a name="defenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled"></a>

```typescript
public readonly defenderForCloudEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestConfigurationEnabled`<sup>Required</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled"></a>

```typescript
public readonly guestConfigurationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logAnalyticsEnabled`<sup>Required</sup> <a name="logAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled"></a>

```typescript
public readonly logAnalyticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `statusChangeAlertEnabled`<sup>Required</sup> <a name="statusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled"></a>

```typescript
public readonly statusChangeAlertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomanageConfigurationAntimalware <a name="AutomanageConfigurationAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationAntimalware: automanageConfiguration.AutomanageConfigurationAntimalware = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | exclusions block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled">realTimeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay">scheduledScanDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled">scheduledScanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes">scheduledScanTimeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType">scheduledScanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}. |

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions"></a>

```typescript
public readonly exclusions: AutomanageConfigurationAntimalwareExclusions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}

---

##### `realTimeProtectionEnabled`<sup>Optional</sup> <a name="realTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled"></a>

```typescript
public readonly realTimeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}.

---

##### `scheduledScanDay`<sup>Optional</sup> <a name="scheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay"></a>

```typescript
public readonly scheduledScanDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}.

---

##### `scheduledScanEnabled`<sup>Optional</sup> <a name="scheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled"></a>

```typescript
public readonly scheduledScanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}.

---

##### `scheduledScanTimeInMinutes`<sup>Optional</sup> <a name="scheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes"></a>

```typescript
public readonly scheduledScanTimeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}.

---

##### `scheduledScanType`<sup>Optional</sup> <a name="scheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType"></a>

```typescript
public readonly scheduledScanType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}.

---

### AutomanageConfigurationAntimalwareExclusions <a name="AutomanageConfigurationAntimalwareExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationAntimalwareExclusions: automanageConfiguration.AutomanageConfigurationAntimalwareExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions">extensions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths">paths</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes">processes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}. |

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions"></a>

```typescript
public readonly extensions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths"></a>

```typescript
public readonly paths: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}.

---

##### `processes`<sup>Optional</sup> <a name="processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes"></a>

```typescript
public readonly processes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}.

---

### AutomanageConfigurationAzureSecurityBaseline <a name="AutomanageConfigurationAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationAzureSecurityBaseline: automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType">assignmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}. |

---

##### `assignmentType`<sup>Optional</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}.

---

### AutomanageConfigurationBackup <a name="AutomanageConfigurationBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackup: automanageConfiguration.AutomanageConfigurationBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays">instantRpRetentionRangeInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy">schedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | schedule_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}. |

---

##### `instantRpRetentionRangeInDays`<sup>Optional</sup> <a name="instantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays"></a>

```typescript
public readonly instantRpRetentionRangeInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: AutomanageConfigurationBackupRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_policy AutomanageConfiguration#retention_policy}

---

##### `schedulePolicy`<sup>Optional</sup> <a name="schedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy"></a>

```typescript
public readonly schedulePolicy: AutomanageConfigurationBackupSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_policy AutomanageConfiguration#schedule_policy}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}.

---

### AutomanageConfigurationBackupRetentionPolicy <a name="AutomanageConfigurationBackupRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupRetentionPolicy: automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType">retentionPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: AutomanageConfigurationBackupRetentionPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#daily_schedule AutomanageConfiguration#daily_schedule}

---

##### `retentionPolicyType`<sup>Optional</sup> <a name="retentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType"></a>

```typescript
public readonly retentionPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#weekly_schedule AutomanageConfiguration#weekly_schedule}

---

### AutomanageConfigurationBackupRetentionPolicyDailySchedule <a name="AutomanageConfigurationBackupRetentionPolicyDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupRetentionPolicyDailySchedule: automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes">retentionTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `retentionDuration`<sup>Optional</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `retentionTimes`<sup>Optional</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes"></a>

```typescript
public readonly retentionTimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration: automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType">durationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `durationType`<sup>Optional</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklySchedule <a name="AutomanageConfigurationBackupRetentionPolicyWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupRetentionPolicyWeeklySchedule: automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes">retentionTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `retentionDuration`<sup>Optional</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `retentionTimes`<sup>Optional</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes"></a>

```typescript
public readonly retentionTimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration: automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType">durationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `durationType`<sup>Optional</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupSchedulePolicy <a name="AutomanageConfigurationBackupSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationBackupSchedulePolicy: automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType">schedulePolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays">scheduleRunDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency">scheduleRunFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes">scheduleRunTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}. |

---

##### `schedulePolicyType`<sup>Optional</sup> <a name="schedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType"></a>

```typescript
public readonly schedulePolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}.

---

##### `scheduleRunDays`<sup>Optional</sup> <a name="scheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays"></a>

```typescript
public readonly scheduleRunDays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}.

---

##### `scheduleRunFrequency`<sup>Optional</sup> <a name="scheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency"></a>

```typescript
public readonly scheduleRunFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}.

---

##### `scheduleRunTimes`<sup>Optional</sup> <a name="scheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes"></a>

```typescript
public readonly scheduleRunTimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}.

---

### AutomanageConfigurationConfig <a name="AutomanageConfigurationConfig" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationConfig: automanageConfiguration.AutomanageConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware">antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | antimalware block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled">automationAccountEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline">azureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | azure_security_baseline block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled">bootDiagnosticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled">defenderForCloudEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled">logAnalyticsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled">statusChangeAlertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}.

---

##### `antimalware`<sup>Optional</sup> <a name="antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware"></a>

```typescript
public readonly antimalware: AutomanageConfigurationAntimalware;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

antimalware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}

---

##### `automationAccountEnabled`<sup>Optional</sup> <a name="automationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled"></a>

```typescript
public readonly automationAccountEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}.

---

##### `azureSecurityBaseline`<sup>Optional</sup> <a name="azureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline"></a>

```typescript
public readonly azureSecurityBaseline: AutomanageConfigurationAzureSecurityBaseline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

azure_security_baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup"></a>

```typescript
public readonly backup: AutomanageConfigurationBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}

---

##### `bootDiagnosticsEnabled`<sup>Optional</sup> <a name="bootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled"></a>

```typescript
public readonly bootDiagnosticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}.

---

##### `defenderForCloudEnabled`<sup>Optional</sup> <a name="defenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled"></a>

```typescript
public readonly defenderForCloudEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}.

---

##### `guestConfigurationEnabled`<sup>Optional</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled"></a>

```typescript
public readonly guestConfigurationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsEnabled`<sup>Optional</sup> <a name="logAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled"></a>

```typescript
public readonly logAnalyticsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}.

---

##### `statusChangeAlertEnabled`<sup>Optional</sup> <a name="statusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled"></a>

```typescript
public readonly statusChangeAlertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomanageConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}

---

### AutomanageConfigurationTimeouts <a name="AutomanageConfigurationTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

const automanageConfigurationTimeouts: automanageConfiguration.AutomanageConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomanageConfigurationAntimalwareExclusionsOutputReference <a name="AutomanageConfigurationAntimalwareExclusionsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses">resetProcesses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions"></a>

```typescript
public resetExtensions(): void
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths"></a>

```typescript
public resetPaths(): void
```

##### `resetProcesses` <a name="resetProcesses" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses"></a>

```typescript
public resetProcesses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput">pathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput">processesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions">extensions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths">paths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes">processes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string;
```

- *Type:* string

---

##### `processesInput`<sup>Optional</sup> <a name="processesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput"></a>

```typescript
public readonly processesInput: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions"></a>

```typescript
public readonly extensions: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths"></a>

```typescript
public readonly paths: string;
```

- *Type:* string

---

##### `processes`<sup>Required</sup> <a name="processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes"></a>

```typescript
public readonly processes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationAntimalwareExclusions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---


### AutomanageConfigurationAntimalwareOutputReference <a name="AutomanageConfigurationAntimalwareOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled">resetRealTimeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay">resetScheduledScanDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled">resetScheduledScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes">resetScheduledScanTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType">resetScheduledScanType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusions` <a name="putExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions"></a>

```typescript
public putExclusions(value: AutomanageConfigurationAntimalwareExclusions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetRealTimeProtectionEnabled` <a name="resetRealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled"></a>

```typescript
public resetRealTimeProtectionEnabled(): void
```

##### `resetScheduledScanDay` <a name="resetScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay"></a>

```typescript
public resetScheduledScanDay(): void
```

##### `resetScheduledScanEnabled` <a name="resetScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled"></a>

```typescript
public resetScheduledScanEnabled(): void
```

##### `resetScheduledScanTimeInMinutes` <a name="resetScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes"></a>

```typescript
public resetScheduledScanTimeInMinutes(): void
```

##### `resetScheduledScanType` <a name="resetScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType"></a>

```typescript
public resetScheduledScanType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput">realTimeProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput">scheduledScanDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput">scheduledScanEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput">scheduledScanTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput">scheduledScanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled">realTimeProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay">scheduledScanDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled">scheduledScanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes">scheduledScanTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType">scheduledScanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: AutomanageConfigurationAntimalwareExclusionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a>

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: AutomanageConfigurationAntimalwareExclusions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `realTimeProtectionEnabledInput`<sup>Optional</sup> <a name="realTimeProtectionEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput"></a>

```typescript
public readonly realTimeProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledScanDayInput`<sup>Optional</sup> <a name="scheduledScanDayInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput"></a>

```typescript
public readonly scheduledScanDayInput: number;
```

- *Type:* number

---

##### `scheduledScanEnabledInput`<sup>Optional</sup> <a name="scheduledScanEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput"></a>

```typescript
public readonly scheduledScanEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledScanTimeInMinutesInput`<sup>Optional</sup> <a name="scheduledScanTimeInMinutesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput"></a>

```typescript
public readonly scheduledScanTimeInMinutesInput: number;
```

- *Type:* number

---

##### `scheduledScanTypeInput`<sup>Optional</sup> <a name="scheduledScanTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput"></a>

```typescript
public readonly scheduledScanTypeInput: string;
```

- *Type:* string

---

##### `realTimeProtectionEnabled`<sup>Required</sup> <a name="realTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled"></a>

```typescript
public readonly realTimeProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledScanDay`<sup>Required</sup> <a name="scheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay"></a>

```typescript
public readonly scheduledScanDay: number;
```

- *Type:* number

---

##### `scheduledScanEnabled`<sup>Required</sup> <a name="scheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled"></a>

```typescript
public readonly scheduledScanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledScanTimeInMinutes`<sup>Required</sup> <a name="scheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes"></a>

```typescript
public readonly scheduledScanTimeInMinutes: number;
```

- *Type:* number

---

##### `scheduledScanType`<sup>Required</sup> <a name="scheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType"></a>

```typescript
public readonly scheduledScanType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationAntimalware;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---


### AutomanageConfigurationAzureSecurityBaselineOutputReference <a name="AutomanageConfigurationAzureSecurityBaselineOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType">resetAssignmentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignmentType` <a name="resetAssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType"></a>

```typescript
public resetAssignmentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput"></a>

```typescript
public readonly assignmentTypeInput: string;
```

- *Type:* string

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationAzureSecurityBaseline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---


### AutomanageConfigurationBackupOutputReference <a name="AutomanageConfigurationBackupOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy">putSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays">resetInstantRpRetentionRangeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy">resetSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: AutomanageConfigurationBackupRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `putSchedulePolicy` <a name="putSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy"></a>

```typescript
public putSchedulePolicy(value: AutomanageConfigurationBackupSchedulePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `resetInstantRpRetentionRangeInDays` <a name="resetInstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays"></a>

```typescript
public resetInstantRpRetentionRangeInDays(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetSchedulePolicy` <a name="resetSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy"></a>

```typescript
public resetSchedulePolicy(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy">schedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput">instantRpRetentionRangeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput">schedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays">instantRpRetentionRangeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: AutomanageConfigurationBackupRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a>

---

##### `schedulePolicy`<sup>Required</sup> <a name="schedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy"></a>

```typescript
public readonly schedulePolicy: AutomanageConfigurationBackupSchedulePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a>

---

##### `instantRpRetentionRangeInDaysInput`<sup>Optional</sup> <a name="instantRpRetentionRangeInDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput"></a>

```typescript
public readonly instantRpRetentionRangeInDaysInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: AutomanageConfigurationBackupRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `schedulePolicyInput`<sup>Optional</sup> <a name="schedulePolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput"></a>

```typescript
public readonly schedulePolicyInput: AutomanageConfigurationBackupSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `instantRpRetentionRangeInDays`<sup>Required</sup> <a name="instantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays"></a>

```typescript
public readonly instantRpRetentionRangeInDays: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration">putRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration">resetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes">resetRetentionTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionDuration` <a name="putRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration"></a>

```typescript
public putRetentionDuration(value: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `resetRetentionDuration` <a name="resetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration"></a>

```typescript
public resetRetentionDuration(): void
```

##### `resetRetentionTimes` <a name="resetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes"></a>

```typescript
public resetRetentionTimes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput">retentionTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes">retentionTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a>

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput"></a>

```typescript
public readonly retentionDurationInput: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `retentionTimesInput`<sup>Optional</sup> <a name="retentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput"></a>

```typescript
public readonly retentionTimesInput: string[];
```

- *Type:* string[]

---

##### `retentionTimes`<sup>Required</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes"></a>

```typescript
public readonly retentionTimes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupRetentionPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType">resetDurationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetDurationType` <a name="resetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```typescript
public resetDurationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput">durationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType">durationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `durationTypeInput`<sup>Optional</sup> <a name="durationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```typescript
public readonly durationTypeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `durationType`<sup>Required</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupRetentionPolicyOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType">resetRetentionPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: AutomanageConfigurationBackupRetentionPolicyDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetRetentionPolicyType` <a name="resetRetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType"></a>

```typescript
public resetRetentionPolicyType(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput">retentionPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType">retentionPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: AutomanageConfigurationBackupRetentionPolicyDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `retentionPolicyTypeInput`<sup>Optional</sup> <a name="retentionPolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput"></a>

```typescript
public readonly retentionPolicyTypeInput: string;
```

- *Type:* string

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `retentionPolicyType`<sup>Required</sup> <a name="retentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType"></a>

```typescript
public readonly retentionPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration">putRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration">resetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes">resetRetentionTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionDuration` <a name="putRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration"></a>

```typescript
public putRetentionDuration(value: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `resetRetentionDuration` <a name="resetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration"></a>

```typescript
public resetRetentionDuration(): void
```

##### `resetRetentionTimes` <a name="resetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes"></a>

```typescript
public resetRetentionTimes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration">retentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput">retentionTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes">retentionTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a>

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput"></a>

```typescript
public readonly retentionDurationInput: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `retentionTimesInput`<sup>Optional</sup> <a name="retentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput"></a>

```typescript
public readonly retentionTimesInput: string[];
```

- *Type:* string[]

---

##### `retentionTimes`<sup>Required</sup> <a name="retentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes"></a>

```typescript
public readonly retentionTimes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType">resetDurationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetDurationType` <a name="resetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```typescript
public resetDurationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput">durationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType">durationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `durationTypeInput`<sup>Optional</sup> <a name="durationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```typescript
public readonly durationTypeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `durationType`<sup>Required</sup> <a name="durationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType"></a>

```typescript
public readonly durationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupSchedulePolicyOutputReference <a name="AutomanageConfigurationBackupSchedulePolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType">resetSchedulePolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays">resetScheduleRunDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency">resetScheduleRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes">resetScheduleRunTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedulePolicyType` <a name="resetSchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType"></a>

```typescript
public resetSchedulePolicyType(): void
```

##### `resetScheduleRunDays` <a name="resetScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays"></a>

```typescript
public resetScheduleRunDays(): void
```

##### `resetScheduleRunFrequency` <a name="resetScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency"></a>

```typescript
public resetScheduleRunFrequency(): void
```

##### `resetScheduleRunTimes` <a name="resetScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes"></a>

```typescript
public resetScheduleRunTimes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput">schedulePolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput">scheduleRunDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput">scheduleRunFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput">scheduleRunTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType">schedulePolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays">scheduleRunDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency">scheduleRunFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes">scheduleRunTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedulePolicyTypeInput`<sup>Optional</sup> <a name="schedulePolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput"></a>

```typescript
public readonly schedulePolicyTypeInput: string;
```

- *Type:* string

---

##### `scheduleRunDaysInput`<sup>Optional</sup> <a name="scheduleRunDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput"></a>

```typescript
public readonly scheduleRunDaysInput: string[];
```

- *Type:* string[]

---

##### `scheduleRunFrequencyInput`<sup>Optional</sup> <a name="scheduleRunFrequencyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput"></a>

```typescript
public readonly scheduleRunFrequencyInput: string;
```

- *Type:* string

---

##### `scheduleRunTimesInput`<sup>Optional</sup> <a name="scheduleRunTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput"></a>

```typescript
public readonly scheduleRunTimesInput: string[];
```

- *Type:* string[]

---

##### `schedulePolicyType`<sup>Required</sup> <a name="schedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType"></a>

```typescript
public readonly schedulePolicyType: string;
```

- *Type:* string

---

##### `scheduleRunDays`<sup>Required</sup> <a name="scheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays"></a>

```typescript
public readonly scheduleRunDays: string[];
```

- *Type:* string[]

---

##### `scheduleRunFrequency`<sup>Required</sup> <a name="scheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency"></a>

```typescript
public readonly scheduleRunFrequency: string;
```

- *Type:* string

---

##### `scheduleRunTimes`<sup>Required</sup> <a name="scheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes"></a>

```typescript
public readonly scheduleRunTimes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomanageConfigurationBackupSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---


### AutomanageConfigurationTimeoutsOutputReference <a name="AutomanageConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { automanageConfiguration } from '@cdktf/provider-azurerm'

new automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomanageConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---



