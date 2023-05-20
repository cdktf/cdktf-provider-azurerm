# `data_azurerm_public_maintenance_configurations`

Refer to the Terraform Registory for docs: [`data_azurerm_public_maintenance_configurations`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations).

# `dataAzurermPublicMaintenanceConfigurations` Submodule <a name="`dataAzurermPublicMaintenanceConfigurations` Submodule" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPublicMaintenanceConfigurations <a name="DataAzurermPublicMaintenanceConfigurations" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations azurerm_public_maintenance_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

new dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations(scope: Construct, id: string, config?: DataAzurermPublicMaintenanceConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig">DataAzurermPublicMaintenanceConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig">DataAzurermPublicMaintenanceConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery">resetRecurEvery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPublicMaintenanceConfigurationsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetRecurEvery` <a name="resetRecurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetRecurEvery"></a>

```typescript
public resetRecurEvery(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs">configs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput">recurEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery">recurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.configs"></a>

```typescript
public readonly configs: DataAzurermPublicMaintenanceConfigurationsConfigsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList">DataAzurermPublicMaintenanceConfigurationsConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference">DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `recurEveryInput`<sup>Optional</sup> <a name="recurEveryInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEveryInput"></a>

```typescript
public readonly recurEveryInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermPublicMaintenanceConfigurationsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `recurEvery`<sup>Required</sup> <a name="recurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.recurEvery"></a>

```typescript
public readonly recurEvery: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPublicMaintenanceConfigurationsConfig <a name="DataAzurermPublicMaintenanceConfigurationsConfig" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

const dataAzurermPublicMaintenanceConfigurationsConfig: dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery">recurEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#id DataAzurermPublicMaintenanceConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#location DataAzurermPublicMaintenanceConfigurations#location}.

---

##### `recurEvery`<sup>Optional</sup> <a name="recurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.recurEvery"></a>

```typescript
public readonly recurEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#recur_every DataAzurermPublicMaintenanceConfigurations#recur_every}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#scope DataAzurermPublicMaintenanceConfigurations#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPublicMaintenanceConfigurationsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#timeouts DataAzurermPublicMaintenanceConfigurations#timeouts}

---

### DataAzurermPublicMaintenanceConfigurationsConfigs <a name="DataAzurermPublicMaintenanceConfigurationsConfigs" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

const dataAzurermPublicMaintenanceConfigurationsConfigs: dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs = { ... }
```


### DataAzurermPublicMaintenanceConfigurationsTimeouts <a name="DataAzurermPublicMaintenanceConfigurationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

const dataAzurermPublicMaintenanceConfigurationsTimeouts: dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/public_maintenance_configurations#read DataAzurermPublicMaintenanceConfigurations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPublicMaintenanceConfigurationsConfigsList <a name="DataAzurermPublicMaintenanceConfigurationsConfigsList" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

new dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get"></a>

```typescript
public get(index: number): DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

new dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope">maintenanceScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery">recurEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maintenanceScope`<sup>Required</sup> <a name="maintenanceScope" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.maintenanceScope"></a>

```typescript
public readonly maintenanceScope: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recurEvery`<sup>Required</sup> <a name="recurEvery" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.recurEvery"></a>

```typescript
public readonly recurEvery: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPublicMaintenanceConfigurationsConfigs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsConfigs">DataAzurermPublicMaintenanceConfigurationsConfigs</a>

---


### DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference <a name="DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPublicMaintenanceConfigurations } from '@cdktf/provider-azurerm'

new dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPublicMaintenanceConfigurationsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPublicMaintenanceConfigurations.DataAzurermPublicMaintenanceConfigurationsTimeouts">DataAzurermPublicMaintenanceConfigurationsTimeouts</a> | cdktf.IResolvable

---



