# `dataAzurermArcResourceBridgeAppliance` Submodule <a name="`dataAzurermArcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermArcResourceBridgeAppliance <a name="DataAzurermArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance(scope: Construct, id: string, config: DataAzurermArcResourceBridgeApplianceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig">DataAzurermArcResourceBridgeApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig">DataAzurermArcResourceBridgeApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermArcResourceBridgeApplianceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermArcResourceBridgeAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro">distro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider">infrastructureProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64">publicKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `distro`<sup>Required</sup> <a name="distro" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro"></a>

```typescript
public readonly distro: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity"></a>

```typescript
public readonly identity: DataAzurermArcResourceBridgeApplianceIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a>

---

##### `infrastructureProvider`<sup>Required</sup> <a name="infrastructureProvider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```typescript
public readonly infrastructureProvider: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `publicKeyBase64`<sup>Required</sup> <a name="publicKeyBase64" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```typescript
public readonly publicKeyBase64: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermArcResourceBridgeApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermArcResourceBridgeApplianceConfig <a name="DataAzurermArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const dataAzurermArcResourceBridgeApplianceConfig: dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermArcResourceBridgeApplianceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

### DataAzurermArcResourceBridgeApplianceIdentity <a name="DataAzurermArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const dataAzurermArcResourceBridgeApplianceIdentity: dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity = { ... }
```


### DataAzurermArcResourceBridgeApplianceTimeouts <a name="DataAzurermArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const dataAzurermArcResourceBridgeApplianceTimeouts: dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermArcResourceBridgeApplianceIdentityList <a name="DataAzurermArcResourceBridgeApplianceIdentityList" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermArcResourceBridgeApplianceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermArcResourceBridgeApplianceIdentityOutputReference <a name="DataAzurermArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermArcResourceBridgeApplianceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a>

---


### DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference <a name="DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermArcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermArcResourceBridgeApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---



