# `arcResourceBridgeAppliance` Submodule <a name="`arcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcResourceBridgeAppliance <a name="ArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new arcResourceBridgeAppliance.ArcResourceBridgeAppliance(scope: Construct, id: string, config: ArcResourceBridgeApplianceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64">resetPublicKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity"></a>

```typescript
public putIdentity(value: ArcResourceBridgeApplianceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts"></a>

```typescript
public putTimeouts(value: ArcResourceBridgeApplianceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublicKeyBase64` <a name="resetPublicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64"></a>

```typescript
public resetPublicKeyBase64(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcResourceBridgeAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput">distroInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput">infrastructureProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input">publicKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro">distro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider">infrastructureProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64">publicKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity"></a>

```typescript
public readonly identity: ArcResourceBridgeApplianceIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts"></a>

```typescript
public readonly timeouts: ArcResourceBridgeApplianceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `distroInput`<sup>Optional</sup> <a name="distroInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput"></a>

```typescript
public readonly distroInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput"></a>

```typescript
public readonly identityInput: ArcResourceBridgeApplianceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureProviderInput`<sup>Optional</sup> <a name="infrastructureProviderInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput"></a>

```typescript
public readonly infrastructureProviderInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicKeyBase64Input`<sup>Optional</sup> <a name="publicKeyBase64Input" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input"></a>

```typescript
public readonly publicKeyBase64Input: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArcResourceBridgeApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---

##### `distro`<sup>Required</sup> <a name="distro" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro"></a>

```typescript
public readonly distro: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureProvider`<sup>Required</sup> <a name="infrastructureProvider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```typescript
public readonly infrastructureProvider: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicKeyBase64`<sup>Required</sup> <a name="publicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```typescript
public readonly publicKeyBase64: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcResourceBridgeApplianceConfig <a name="ArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const arcResourceBridgeApplianceConfig: arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro">distro</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider">infrastructureProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64">publicKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distro`<sup>Required</sup> <a name="distro" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro"></a>

```typescript
public readonly distro: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity"></a>

```typescript
public readonly identity: ArcResourceBridgeApplianceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#identity ArcResourceBridgeAppliance#identity}

---

##### `infrastructureProvider`<sup>Required</sup> <a name="infrastructureProvider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider"></a>

```typescript
public readonly infrastructureProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicKeyBase64`<sup>Optional</sup> <a name="publicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64"></a>

```typescript
public readonly publicKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArcResourceBridgeApplianceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#timeouts ArcResourceBridgeAppliance#timeouts}

---

### ArcResourceBridgeApplianceIdentity <a name="ArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const arcResourceBridgeApplianceIdentity: arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}.

---

### ArcResourceBridgeApplianceTimeouts <a name="ArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

const arcResourceBridgeApplianceTimeouts: arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcResourceBridgeApplianceIdentityOutputReference <a name="ArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcResourceBridgeApplianceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---


### ArcResourceBridgeApplianceTimeoutsOutputReference <a name="ArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```typescript
import { arcResourceBridgeAppliance } from '@cdktf/provider-azurerm'

new arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcResourceBridgeApplianceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---



