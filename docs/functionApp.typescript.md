# `azurerm_function_app`

Refer to the Terraform Registory for docs: [`azurerm_function_app`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app).

# `functionApp` Submodule <a name="`functionApp` Submodule" id="@cdktf/provider-azurerm.functionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionApp <a name="FunctionApp" id="@cdktf/provider-azurerm.functionApp.FunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app azurerm_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionApp(scope: Construct, id: string, config: FunctionAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig">FunctionAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig">FunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings">putAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig">putSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl">putSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings">resetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings">resetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode">resetClientCertMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota">resetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging">resetEnableBuiltinLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId">resetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig">resetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl">resetSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthSettings` <a name="putAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings"></a>

```typescript
public putAuthSettings(value: FunctionAppAuthSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `putConnectionString` <a name="putConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString"></a>

```typescript
public putConnectionString(value: IResolvable | FunctionAppConnectionString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity"></a>

```typescript
public putIdentity(value: FunctionAppIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `putSiteConfig` <a name="putSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig"></a>

```typescript
public putSiteConfig(value: FunctionAppSiteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `putSourceControl` <a name="putSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl"></a>

```typescript
public putSourceControl(value: FunctionAppSourceControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts"></a>

```typescript
public putTimeouts(value: FunctionAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---

##### `resetAppSettings` <a name="resetAppSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings"></a>

```typescript
public resetAppSettings(): void
```

##### `resetAuthSettings` <a name="resetAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings"></a>

```typescript
public resetAuthSettings(): void
```

##### `resetClientCertMode` <a name="resetClientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode"></a>

```typescript
public resetClientCertMode(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDailyMemoryTimeQuota` <a name="resetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota"></a>

```typescript
public resetDailyMemoryTimeQuota(): void
```

##### `resetEnableBuiltinLogging` <a name="resetEnableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging"></a>

```typescript
public resetEnableBuiltinLogging(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKeyVaultReferenceIdentityId` <a name="resetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId"></a>

```typescript
public resetKeyVaultReferenceIdentityId(): void
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetSiteConfig` <a name="resetSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig"></a>

```typescript
public resetSiteConfig(): void
```

##### `resetSourceControl` <a name="resetSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl"></a>

```typescript
public resetSourceControl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

functionApp.FunctionApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

functionApp.FunctionApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

functionApp.FunctionApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput">appServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput">appSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput">authSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput">clientCertModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput">connectionStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput">dailyMemoryTimeQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput">enableBuiltinLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput">keyVaultReferenceIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput">siteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput">sourceControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode">clientCertMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings"></a>

```typescript
public readonly authSettings: FunctionAppAuthSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString"></a>

```typescript
public readonly connectionString: FunctionAppConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity"></a>

```typescript
public readonly identity: FunctionAppIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig"></a>

```typescript
public readonly siteConfig: FunctionAppSiteConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential"></a>

```typescript
public readonly siteCredential: FunctionAppSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a>

---

##### `sourceControl`<sup>Required</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl"></a>

```typescript
public readonly sourceControl: FunctionAppSourceControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a>

---

##### `appServicePlanIdInput`<sup>Optional</sup> <a name="appServicePlanIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput"></a>

```typescript
public readonly appServicePlanIdInput: string;
```

- *Type:* string

---

##### `appSettingsInput`<sup>Optional</sup> <a name="appSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput"></a>

```typescript
public readonly appSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authSettingsInput`<sup>Optional</sup> <a name="authSettingsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput"></a>

```typescript
public readonly authSettingsInput: FunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `clientCertModeInput`<sup>Optional</sup> <a name="clientCertModeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput"></a>

```typescript
public readonly clientCertModeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: IResolvable | FunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]

---

##### `dailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="dailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```typescript
public readonly dailyMemoryTimeQuotaInput: number;
```

- *Type:* number

---

##### `enableBuiltinLoggingInput`<sup>Optional</sup> <a name="enableBuiltinLoggingInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput"></a>

```typescript
public readonly enableBuiltinLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput"></a>

```typescript
public readonly identityInput: FunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="keyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```typescript
public readonly keyVaultReferenceIdentityIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `siteConfigInput`<sup>Optional</sup> <a name="siteConfigInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput"></a>

```typescript
public readonly siteConfigInput: FunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `sourceControlInput`<sup>Optional</sup> <a name="sourceControlInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput"></a>

```typescript
public readonly sourceControlInput: FunctionAppSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FunctionAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientCertMode`<sup>Required</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode"></a>

```typescript
public readonly clientCertMode: string;
```

- *Type:* string

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

---

##### `enableBuiltinLogging`<sup>Required</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging"></a>

```typescript
public readonly enableBuiltinLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultReferenceIdentityId`<sup>Required</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppAuthSettings <a name="FunctionAppAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettings: functionApp.FunctionAppAuthSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#default_provider FunctionApp#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#issuer FunctionApp#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#runtime_version FunctionApp#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: FunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#active_directory FunctionApp#active_directory}

---

##### `additionalLoginParams`<sup>Optional</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}.

---

##### `allowedExternalRedirectUrls`<sup>Optional</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}.

---

##### `defaultProvider`<sup>Optional</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#default_provider FunctionApp#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook"></a>

```typescript
public readonly facebook: FunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#facebook FunctionApp#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google"></a>

```typescript
public readonly google: FunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#google FunctionApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#issuer FunctionApp#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft"></a>

```typescript
public readonly microsoft: FunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#microsoft FunctionApp#microsoft}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#runtime_version FunctionApp#runtime_version}.

---

##### `tokenRefreshExtensionHours`<sup>Optional</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}.

---

##### `tokenStoreEnabled`<sup>Optional</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter"></a>

```typescript
public readonly twitter: FunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#twitter FunctionApp#twitter}

---

##### `unauthenticatedClientAction`<sup>Optional</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}.

---

### FunctionAppAuthSettingsActiveDirectory <a name="FunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettingsActiveDirectory: functionApp.FunctionAppAuthSettingsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

### FunctionAppAuthSettingsFacebook <a name="FunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettingsFacebook: functionApp.FunctionAppAuthSettingsFacebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_id FunctionApp#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret">appSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_secret FunctionApp#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_id FunctionApp#app_id}.

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_secret FunctionApp#app_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsGoogle <a name="FunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettingsGoogle: functionApp.FunctionAppAuthSettingsGoogle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsMicrosoft <a name="FunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettingsMicrosoft: functionApp.FunctionAppAuthSettingsMicrosoft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsTwitter <a name="FunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppAuthSettingsTwitter: functionApp.FunctionAppAuthSettingsTwitter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey">consumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#consumer_key FunctionApp#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}. |

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#consumer_key FunctionApp#consumer_key}.

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}.

---

### FunctionAppConfig <a name="FunctionAppConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppConfig: functionApp.FunctionAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings">appSettings</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode">clientCertMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString">connectionString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging">enableBuiltinLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId">keyVaultReferenceIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#version FunctionApp#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#location FunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `appSettings`<sup>Optional</sup> <a name="appSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings"></a>

```typescript
public readonly appSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `authSettings`<sup>Optional</sup> <a name="authSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings"></a>

```typescript
public readonly authSettings: FunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `clientCertMode`<sup>Optional</sup> <a name="clientCertMode" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode"></a>

```typescript
public readonly clientCertMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString"></a>

```typescript
public readonly connectionString: IResolvable | FunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `dailyMemoryTimeQuota`<sup>Optional</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `enableBuiltinLogging`<sup>Optional</sup> <a name="enableBuiltinLogging" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging"></a>

```typescript
public readonly enableBuiltinLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity"></a>

```typescript
public readonly identity: FunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#identity FunctionApp#identity}

---

##### `keyVaultReferenceIdentityId`<sup>Optional</sup> <a name="keyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```typescript
public readonly keyVaultReferenceIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `siteConfig`<sup>Optional</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig"></a>

```typescript
public readonly siteConfig: FunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `sourceControl`<sup>Optional</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl"></a>

```typescript
public readonly sourceControl: FunctionAppSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#version FunctionApp#version}.

---

### FunctionAppConnectionString <a name="FunctionAppConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppConnectionString: functionApp.FunctionAppConnectionString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#value FunctionApp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#type FunctionApp#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#value FunctionApp#value}.

---

### FunctionAppIdentity <a name="FunctionAppIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppIdentity: functionApp.FunctionAppIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#identity_ids FunctionApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#type FunctionApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#identity_ids FunctionApp#identity_ids}.

---

### FunctionAppSiteConfig <a name="FunctionAppSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfig: functionApp.FunctionAppSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#always_on FunctionApp#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState">ftpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ftps_state FunctionApp#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#health_check_path FunctionApp#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction">ipRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion">javaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#java_version FunctionApp#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction">scmIpRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType">scmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_type FunctionApp#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}. |

---

##### `alwaysOn`<sup>Optional</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#always_on FunctionApp#always_on}.

---

##### `appScaleLimit`<sup>Optional</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}.

---

##### `autoSwapSlotName`<sup>Optional</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors"></a>

```typescript
public readonly cors: FunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#cors FunctionApp#cors}

---

##### `dotnetFrameworkVersion`<sup>Optional</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}.

---

##### `elasticInstanceMinimum`<sup>Optional</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}.

---

##### `ftpsState`<sup>Optional</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ftps_state FunctionApp#ftps_state}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#health_check_path FunctionApp#health_check_path}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}.

---

##### `ipRestriction`<sup>Optional</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: IResolvable | FunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}.

---

##### `javaVersion`<sup>Optional</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#java_version FunctionApp#java_version}.

---

##### `linuxFxVersion`<sup>Optional</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}.

---

##### `preWarmedInstanceCount`<sup>Optional</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}.

---

##### `runtimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}.

---

##### `scmIpRestriction`<sup>Optional</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: IResolvable | FunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}.

---

##### `scmType`<sup>Optional</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_type FunctionApp#scm_type}.

---

##### `scmUseMainIpRestriction`<sup>Optional</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}.

---

##### `use32BitWorkerProcess`<sup>Optional</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}.

---

##### `vnetRouteAllEnabled`<sup>Optional</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}.

---

##### `websocketsEnabled`<sup>Optional</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}.

---

### FunctionAppSiteConfigCors <a name="FunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfigCors: functionApp.FunctionAppSiteConfigCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#support_credentials FunctionApp#support_credentials}. |

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}.

---

##### `supportCredentials`<sup>Optional</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#support_credentials FunctionApp#support_credentials}.

---

### FunctionAppSiteConfigIpRestriction <a name="FunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfigIpRestriction: functionApp.FunctionAppSiteConfigIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | FunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigIpRestrictionHeaders <a name="FunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfigIpRestrictionHeaders: functionApp.FunctionAppSiteConfigIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteConfigScmIpRestriction <a name="FunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfigScmIpRestriction: functionApp.FunctionAppSiteConfigScmIpRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag">serviceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```typescript
public readonly headers: IResolvable | FunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `serviceTag`<sup>Optional</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteConfigScmIpRestrictionHeaders: functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `xAzureFdid`<sup>Optional</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `xFdHealthProbe`<sup>Optional</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `xForwardedFor`<sup>Optional</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `xForwardedHost`<sup>Optional</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteCredential <a name="FunctionAppSiteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSiteCredential: functionApp.FunctionAppSiteCredential = { ... }
```


### FunctionAppSourceControl <a name="FunctionAppSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppSourceControl: functionApp.FunctionAppSourceControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#branch FunctionApp#branch}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration">manualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#manual_integration FunctionApp#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl">repoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#repo_url FunctionApp#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#branch FunctionApp#branch}.

---

##### `manualIntegration`<sup>Optional</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration"></a>

```typescript
public readonly manualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#manual_integration FunctionApp#manual_integration}.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#repo_url FunctionApp#repo_url}.

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}.

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}.

---

### FunctionAppTimeouts <a name="FunctionAppTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

const functionAppTimeouts: functionApp.FunctionAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#create FunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#delete FunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#read FunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#update FunctionApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#create FunctionApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#delete FunctionApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#read FunctionApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/function_app#update FunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```typescript
public resetAllowedAudiences(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```typescript
public readonly allowedAudiencesInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---


### FunctionAppAuthSettingsFacebookOutputReference <a name="FunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---


### FunctionAppAuthSettingsGoogleOutputReference <a name="FunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---


### FunctionAppAuthSettingsMicrosoftOutputReference <a name="FunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---


### FunctionAppAuthSettingsOutputReference <a name="FunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook">putFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle">putGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft">putMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams">resetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">resetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider">resetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook">resetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle">resetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft">resetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">resetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">resetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">resetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: FunctionAppAuthSettingsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `putFacebook` <a name="putFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook"></a>

```typescript
public putFacebook(value: FunctionAppAuthSettingsFacebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `putGoogle` <a name="putGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle"></a>

```typescript
public putGoogle(value: FunctionAppAuthSettingsGoogle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `putMicrosoft` <a name="putMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```typescript
public putMicrosoft(value: FunctionAppAuthSettingsMicrosoft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter"></a>

```typescript
public putTwitter(value: FunctionAppAuthSettingsTwitter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAdditionalLoginParams` <a name="resetAdditionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```typescript
public resetAdditionalLoginParams(): void
```

##### `resetAllowedExternalRedirectUrls` <a name="resetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```typescript
public resetAllowedExternalRedirectUrls(): void
```

##### `resetDefaultProvider` <a name="resetDefaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```typescript
public resetDefaultProvider(): void
```

##### `resetFacebook` <a name="resetFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```typescript
public resetFacebook(): void
```

##### `resetGoogle` <a name="resetGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```typescript
public resetGoogle(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetMicrosoft` <a name="resetMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```typescript
public resetMicrosoft(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTokenRefreshExtensionHours` <a name="resetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```typescript
public resetTokenRefreshExtensionHours(): void
```

##### `resetTokenStoreEnabled` <a name="resetTokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```typescript
public resetTokenStoreEnabled(): void
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```typescript
public resetTwitter(): void
```

##### `resetUnauthenticatedClientAction` <a name="resetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```typescript
public resetUnauthenticatedClientAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput">additionalLoginParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput">defaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput">facebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput">googleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput">microsoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">tokenRefreshExtensionHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">tokenStoreEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams">additionalLoginParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: FunctionAppAuthSettingsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: FunctionAppAuthSettingsFacebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: FunctionAppAuthSettingsGoogleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: FunctionAppAuthSettingsMicrosoftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: FunctionAppAuthSettingsTwitterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: FunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `additionalLoginParamsInput`<sup>Optional</sup> <a name="additionalLoginParamsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```typescript
public readonly additionalLoginParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="allowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```typescript
public readonly allowedExternalRedirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultProviderInput`<sup>Optional</sup> <a name="defaultProviderInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```typescript
public readonly defaultProviderInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `facebookInput`<sup>Optional</sup> <a name="facebookInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```typescript
public readonly facebookInput: FunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `googleInput`<sup>Optional</sup> <a name="googleInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```typescript
public readonly googleInput: FunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `microsoftInput`<sup>Optional</sup> <a name="microsoftInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```typescript
public readonly microsoftInput: FunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="tokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```typescript
public readonly tokenRefreshExtensionHoursInput: number;
```

- *Type:* number

---

##### `tokenStoreEnabledInput`<sup>Optional</sup> <a name="tokenStoreEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```typescript
public readonly tokenStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```typescript
public readonly twitterInput: FunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `unauthenticatedClientActionInput`<sup>Optional</sup> <a name="unauthenticatedClientActionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```typescript
public readonly unauthenticatedClientActionInput: string;
```

- *Type:* string

---

##### `additionalLoginParams`<sup>Required</sup> <a name="additionalLoginParams" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams"></a>

```typescript
public readonly additionalLoginParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---


### FunctionAppAuthSettingsTwitterOutputReference <a name="FunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKeyInput`<sup>Optional</sup> <a name="consumerKeyInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```typescript
public readonly consumerKeyInput: string;
```

- *Type:* string

---

##### `consumerSecretInput`<sup>Optional</sup> <a name="consumerSecretInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```typescript
public readonly consumerSecretInput: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---


### FunctionAppConnectionStringList <a name="FunctionAppConnectionStringList" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get"></a>

```typescript
public get(index: number): FunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppConnectionString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>[]

---


### FunctionAppConnectionStringOutputReference <a name="FunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppConnectionString;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>

---


### FunctionAppIdentityOutputReference <a name="FunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---


### FunctionAppSiteConfigCorsOutputReference <a name="FunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">resetSupportCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportCredentials` <a name="resetSupportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```typescript
public resetSupportCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">supportCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `supportCredentialsInput`<sup>Optional</sup> <a name="supportCredentialsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```typescript
public readonly supportCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---


### FunctionAppSiteConfigIpRestrictionHeadersList <a name="FunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): FunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]

---


### FunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>

---


### FunctionAppSiteConfigIpRestrictionList <a name="FunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): FunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]

---


### FunctionAppSiteConfigIpRestrictionOutputReference <a name="FunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | FunctionAppSiteConfigIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: FunctionAppSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | FunctionAppSiteConfigIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>

---


### FunctionAppSiteConfigOutputReference <a name="FunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction">putIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction">putScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn">resetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit">resetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName">resetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion">resetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">resetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState">resetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction">resetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion">resetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion">resetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">resetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">resetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction">resetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType">resetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">resetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess">resetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">resetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">resetWebsocketsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors"></a>

```typescript
public putCors(value: FunctionAppSiteConfigCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `putIpRestriction` <a name="putIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```typescript
public putIpRestriction(value: IResolvable | FunctionAppSiteConfigIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]

---

##### `putScmIpRestriction` <a name="putScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```typescript
public putScmIpRestriction(value: IResolvable | FunctionAppSiteConfigScmIpRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]

---

##### `resetAlwaysOn` <a name="resetAlwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```typescript
public resetAlwaysOn(): void
```

##### `resetAppScaleLimit` <a name="resetAppScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```typescript
public resetAppScaleLimit(): void
```

##### `resetAutoSwapSlotName` <a name="resetAutoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```typescript
public resetAutoSwapSlotName(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDotnetFrameworkVersion` <a name="resetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```typescript
public resetDotnetFrameworkVersion(): void
```

##### `resetElasticInstanceMinimum` <a name="resetElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```typescript
public resetElasticInstanceMinimum(): void
```

##### `resetFtpsState` <a name="resetFtpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```typescript
public resetFtpsState(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetIpRestriction` <a name="resetIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```typescript
public resetIpRestriction(): void
```

##### `resetJavaVersion` <a name="resetJavaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion"></a>

```typescript
public resetJavaVersion(): void
```

##### `resetLinuxFxVersion` <a name="resetLinuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion"></a>

```typescript
public resetLinuxFxVersion(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetPreWarmedInstanceCount` <a name="resetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```typescript
public resetPreWarmedInstanceCount(): void
```

##### `resetRuntimeScaleMonitoringEnabled` <a name="resetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```typescript
public resetRuntimeScaleMonitoringEnabled(): void
```

##### `resetScmIpRestriction` <a name="resetScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```typescript
public resetScmIpRestriction(): void
```

##### `resetScmType` <a name="resetScmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType"></a>

```typescript
public resetScmType(): void
```

##### `resetScmUseMainIpRestriction` <a name="resetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```typescript
public resetScmUseMainIpRestriction(): void
```

##### `resetUse32BitWorkerProcess` <a name="resetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```typescript
public resetUse32BitWorkerProcess(): void
```

##### `resetVnetRouteAllEnabled` <a name="resetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```typescript
public resetVnetRouteAllEnabled(): void
```

##### `resetWebsocketsEnabled` <a name="resetWebsocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```typescript
public resetWebsocketsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput">alwaysOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput">appScaleLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput">autoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">elasticInstanceMinimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput">ftpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput">ipRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput">javaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput">linuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">preWarmedInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtimeScaleMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">scmIpRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput">scmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scmUseMainIpRestrictionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32BitWorkerProcessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnetRouteAllEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">websocketsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName">autoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: FunctionAppSiteConfigCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a>

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: FunctionAppSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a>

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: FunctionAppSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `alwaysOnInput`<sup>Optional</sup> <a name="alwaysOnInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```typescript
public readonly alwaysOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appScaleLimitInput`<sup>Optional</sup> <a name="appScaleLimitInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```typescript
public readonly appScaleLimitInput: number;
```

- *Type:* number

---

##### `autoSwapSlotNameInput`<sup>Optional</sup> <a name="autoSwapSlotNameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```typescript
public readonly autoSwapSlotNameInput: string;
```

- *Type:* string

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput"></a>

```typescript
public readonly corsInput: FunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `dotnetFrameworkVersionInput`<sup>Optional</sup> <a name="dotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```typescript
public readonly dotnetFrameworkVersionInput: string;
```

- *Type:* string

---

##### `elasticInstanceMinimumInput`<sup>Optional</sup> <a name="elasticInstanceMinimumInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```typescript
public readonly elasticInstanceMinimumInput: number;
```

- *Type:* number

---

##### `ftpsStateInput`<sup>Optional</sup> <a name="ftpsStateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```typescript
public readonly ftpsStateInput: string;
```

- *Type:* string

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionInput`<sup>Optional</sup> <a name="ipRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```typescript
public readonly ipRestrictionInput: IResolvable | FunctionAppSiteConfigIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>[]

---

##### `javaVersionInput`<sup>Optional</sup> <a name="javaVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput"></a>

```typescript
public readonly javaVersionInput: string;
```

- *Type:* string

---

##### `linuxFxVersionInput`<sup>Optional</sup> <a name="linuxFxVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```typescript
public readonly linuxFxVersionInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `preWarmedInstanceCountInput`<sup>Optional</sup> <a name="preWarmedInstanceCountInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```typescript
public readonly preWarmedInstanceCountInput: number;
```

- *Type:* number

---

##### `runtimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="runtimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```typescript
public readonly runtimeScaleMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmIpRestrictionInput`<sup>Optional</sup> <a name="scmIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```typescript
public readonly scmIpRestrictionInput: IResolvable | FunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]

---

##### `scmTypeInput`<sup>Optional</sup> <a name="scmTypeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput"></a>

```typescript
public readonly scmTypeInput: string;
```

- *Type:* string

---

##### `scmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="scmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```typescript
public readonly scmUseMainIpRestrictionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcessInput`<sup>Optional</sup> <a name="use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```typescript
public readonly use32BitWorkerProcessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabledInput`<sup>Optional</sup> <a name="vnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```typescript
public readonly vnetRouteAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabledInput`<sup>Optional</sup> <a name="websocketsEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```typescript
public readonly websocketsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

---

##### `autoSwapSlotName`<sup>Required</sup> <a name="autoSwapSlotName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName"></a>

```typescript
public readonly autoSwapSlotName: string;
```

- *Type:* string

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---


### FunctionAppSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---


### FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">resetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">resetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">resetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">resetXForwardedHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXAzureFdid` <a name="resetXAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```typescript
public resetXAzureFdid(): void
```

##### `resetXFdHealthProbe` <a name="resetXFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```typescript
public resetXFdHealthProbe(): void
```

##### `resetXForwardedFor` <a name="resetXForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```typescript
public resetXForwardedFor(): void
```

##### `resetXForwardedHost` <a name="resetXForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```typescript
public resetXForwardedHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">xAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">xFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">xForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">xForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdidInput`<sup>Optional</sup> <a name="xAzureFdidInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```typescript
public readonly xAzureFdidInput: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbeInput`<sup>Optional</sup> <a name="xFdHealthProbeInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```typescript
public readonly xFdHealthProbeInput: string[];
```

- *Type:* string[]

---

##### `xForwardedForInput`<sup>Optional</sup> <a name="xForwardedForInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```typescript
public readonly xForwardedForInput: string[];
```

- *Type:* string[]

---

##### `xForwardedHostInput`<sup>Optional</sup> <a name="xForwardedHostInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```typescript
public readonly xForwardedHostInput: string[];
```

- *Type:* string[]

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigScmIpRestrictionHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### FunctionAppSiteConfigScmIpRestrictionList <a name="FunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): FunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigScmIpRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>[]

---


### FunctionAppSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">resetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | FunctionAppSiteConfigScmIpRestrictionHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetServiceTag` <a name="resetServiceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```typescript
public resetServiceTag(): void
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```typescript
public resetVirtualNetworkSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">serviceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: FunctionAppSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | FunctionAppSiteConfigScmIpRestrictionHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>[]

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceTagInput`<sup>Optional</sup> <a name="serviceTagInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```typescript
public readonly serviceTagInput: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```typescript
public readonly virtualNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppSiteConfigScmIpRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>

---


### FunctionAppSiteCredentialList <a name="FunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get"></a>

```typescript
public get(index: number): FunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FunctionAppSiteCredentialOutputReference <a name="FunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a>

---


### FunctionAppSourceControlOutputReference <a name="FunctionAppSourceControlOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppSourceControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration">resetManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetManualIntegration` <a name="resetManualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration"></a>

```typescript
public resetManualIntegration(): void
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl"></a>

```typescript
public resetRepoUrl(): void
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled"></a>

```typescript
public resetRollbackEnabled(): void
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial"></a>

```typescript
public resetUseMercurial(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput">manualIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput">repoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput">useMercurialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration">manualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl">repoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `manualIntegrationInput`<sup>Optional</sup> <a name="manualIntegrationInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput"></a>

```typescript
public readonly manualIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput"></a>

```typescript
public readonly repoUrlInput: string;
```

- *Type:* string

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput"></a>

```typescript
public readonly rollbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput"></a>

```typescript
public readonly useMercurialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `manualIntegration`<sup>Required</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration"></a>

```typescript
public readonly manualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FunctionAppSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---


### FunctionAppTimeoutsOutputReference <a name="FunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { functionApp } from '@cdktf/provider-azurerm'

new functionApp.FunctionAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

---



