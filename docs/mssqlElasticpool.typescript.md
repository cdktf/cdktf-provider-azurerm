# `azurerm_mssql_elasticpool`

Refer to the Terraform Registory for docs: [`azurerm_mssql_elasticpool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool).

# `mssqlElasticpool` Submodule <a name="`mssqlElasticpool` Submodule" id="@cdktf/provider-azurerm.mssqlElasticpool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlElasticpool <a name="MssqlElasticpool" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool azurerm_mssql_elasticpool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

new mssqlElasticpool.MssqlElasticpool(scope: Construct, id: string, config: MssqlElasticpoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig">MssqlElasticpoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig">MssqlElasticpoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings">putPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName">resetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb">resetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPerDatabaseSettings` <a name="putPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings"></a>

```typescript
public putPerDatabaseSettings(value: MssqlElasticpoolPerDatabaseSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku"></a>

```typescript
public putSku(value: MssqlElasticpoolSku): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlElasticpoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetMaintenanceConfigurationName` <a name="resetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName"></a>

```typescript
public resetMaintenanceConfigurationName(): void
```

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes"></a>

```typescript
public resetMaxSizeBytes(): void
```

##### `resetMaxSizeGb` <a name="resetMaxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb"></a>

```typescript
public resetMaxSizeGb(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant"></a>

```typescript
public resetZoneRedundant(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

mssqlElasticpool.MssqlElasticpool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

mssqlElasticpool.MssqlElasticpool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

mssqlElasticpool.MssqlElasticpool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings">perDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput">maintenanceConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput">maxSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput">perDatabaseSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes">maxSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb">maxSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `perDatabaseSettings`<sup>Required</sup> <a name="perDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings"></a>

```typescript
public readonly perDatabaseSettings: MssqlElasticpoolPerDatabaseSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku"></a>

```typescript
public readonly sku: MssqlElasticpoolSkuOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlElasticpoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceConfigurationNameInput`<sup>Optional</sup> <a name="maintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput"></a>

```typescript
public readonly maintenanceConfigurationNameInput: string;
```

- *Type:* string

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput"></a>

```typescript
public readonly maxSizeBytesInput: number;
```

- *Type:* number

---

##### `maxSizeGbInput`<sup>Optional</sup> <a name="maxSizeGbInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput"></a>

```typescript
public readonly maxSizeGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `perDatabaseSettingsInput`<sup>Optional</sup> <a name="perDatabaseSettingsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput"></a>

```typescript
public readonly perDatabaseSettingsInput: MssqlElasticpoolPerDatabaseSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput"></a>

```typescript
public readonly skuInput: MssqlElasticpoolSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlElasticpoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput"></a>

```typescript
public readonly zoneRedundantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maintenanceConfigurationName`<sup>Required</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: number;
```

- *Type:* number

---

##### `maxSizeGb`<sup>Required</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlElasticpoolConfig <a name="MssqlElasticpoolConfig" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

const mssqlElasticpoolConfig: mssqlElasticpool.MssqlElasticpoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings">perDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | per_database_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb">maxSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `perDatabaseSettings`<sup>Required</sup> <a name="perDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings"></a>

```typescript
public readonly perDatabaseSettings: MssqlElasticpoolPerDatabaseSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

per_database_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#per_database_settings MssqlElasticpool#per_database_settings}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku"></a>

```typescript
public readonly sku: MssqlElasticpoolSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#sku MssqlElasticpool#sku}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}.

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}.

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlElasticpoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#timeouts MssqlElasticpool#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}.

---

### MssqlElasticpoolPerDatabaseSettings <a name="MssqlElasticpoolPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

const mssqlElasticpoolPerDatabaseSettings: mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity">minCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}.

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}.

---

### MssqlElasticpoolSku <a name="MssqlElasticpoolSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

const mssqlElasticpoolSku: mssqlElasticpool.MssqlElasticpoolSku = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family">family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}.

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}.

---

### MssqlElasticpoolTimeouts <a name="MssqlElasticpoolTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

const mssqlElasticpoolTimeouts: mssqlElasticpool.MssqlElasticpoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlElasticpoolPerDatabaseSettingsOutputReference <a name="MssqlElasticpoolPerDatabaseSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

new mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: number;
```

- *Type:* number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlElasticpoolPerDatabaseSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---


### MssqlElasticpoolSkuOutputReference <a name="MssqlElasticpoolSkuOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

new mssqlElasticpool.MssqlElasticpoolSkuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily">resetFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily"></a>

```typescript
public resetFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlElasticpoolSku;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---


### MssqlElasticpoolTimeoutsOutputReference <a name="MssqlElasticpoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlElasticpool } from '@cdktf/provider-azurerm'

new mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlElasticpoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---



