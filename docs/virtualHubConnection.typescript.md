# `virtualHubConnection` Submodule <a name="`virtualHubConnection` Submodule" id="@cdktf/provider-azurerm.virtualHubConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubConnection <a name="VirtualHubConnection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection azurerm_virtual_hub_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnection(scope: Construct, id: string, config: VirtualHubConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig">VirtualHubConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig">VirtualHubConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetInternetSecurityEnabled">resetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting"></a>

```typescript
public putRouting(value: VirtualHubConnectionRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualHubConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetSecurityEnabled` <a name="resetInternetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetInternetSecurityEnabled"></a>

```typescript
public resetInternetSecurityEnabled(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

virtualHubConnection.VirtualHubConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

virtualHubConnection.VirtualHubConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

virtualHubConnection.VirtualHubConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

virtualHubConnection.VirtualHubConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualHubConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualHubConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualHubConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference">VirtualHubConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference">VirtualHubConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabledInput">internetSecurityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkIdInput">remoteVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routing"></a>

```typescript
public readonly routing: VirtualHubConnectionRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference">VirtualHubConnectionRoutingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference">VirtualHubConnectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetSecurityEnabledInput`<sup>Optional</sup> <a name="internetSecurityEnabledInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabledInput"></a>

```typescript
public readonly internetSecurityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="remoteVirtualNetworkIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkIdInput"></a>

```typescript
public readonly remoteVirtualNetworkIdInput: string;
```

- *Type:* string

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routingInput"></a>

```typescript
public readonly routingInput: VirtualHubConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualHubConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetSecurityEnabled`<sup>Required</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkId"></a>

```typescript
public readonly remoteVirtualNetworkId: string;
```

- *Type:* string

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubConnectionConfig <a name="VirtualHubConnectionConfig" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

const virtualHubConnectionConfig: virtualHubConnection.VirtualHubConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#virtual_hub_id VirtualHubConnection#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#id VirtualHubConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#internet_security_enabled VirtualHubConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}.

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.remoteVirtualNetworkId"></a>

```typescript
public readonly remoteVirtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#virtual_hub_id VirtualHubConnection#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#id VirtualHubConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetSecurityEnabled`<sup>Optional</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#internet_security_enabled VirtualHubConnection#internet_security_enabled}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.routing"></a>

```typescript
public readonly routing: VirtualHubConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#routing VirtualHubConnection#routing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#timeouts VirtualHubConnection#timeouts}

---

### VirtualHubConnectionRouting <a name="VirtualHubConnectionRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

const virtualHubConnectionRouting: virtualHubConnection.VirtualHubConnectionRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#associated_route_table_id VirtualHubConnection#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#inbound_route_map_id VirtualHubConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#outbound_route_map_id VirtualHubConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetLocalRouteOverrideCriteria">staticVnetLocalRouteOverrideCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#static_vnet_local_route_override_criteria VirtualHubConnection#static_vnet_local_route_override_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetPropagateStaticRoutesEnabled">staticVnetPropagateStaticRoutesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#static_vnet_propagate_static_routes_enabled VirtualHubConnection#static_vnet_propagate_static_routes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetRoute">staticVnetRoute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]</code> | static_vnet_route block. |

---

##### `associatedRouteTableId`<sup>Optional</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#associated_route_table_id VirtualHubConnection#associated_route_table_id}.

---

##### `inboundRouteMapId`<sup>Optional</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#inbound_route_map_id VirtualHubConnection#inbound_route_map_id}.

---

##### `outboundRouteMapId`<sup>Optional</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#outbound_route_map_id VirtualHubConnection#outbound_route_map_id}.

---

##### `propagatedRouteTable`<sup>Optional</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: VirtualHubConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#propagated_route_table VirtualHubConnection#propagated_route_table}

---

##### `staticVnetLocalRouteOverrideCriteria`<sup>Optional</sup> <a name="staticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetLocalRouteOverrideCriteria"></a>

```typescript
public readonly staticVnetLocalRouteOverrideCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#static_vnet_local_route_override_criteria VirtualHubConnection#static_vnet_local_route_override_criteria}.

---

##### `staticVnetPropagateStaticRoutesEnabled`<sup>Optional</sup> <a name="staticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetPropagateStaticRoutesEnabled"></a>

```typescript
public readonly staticVnetPropagateStaticRoutesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#static_vnet_propagate_static_routes_enabled VirtualHubConnection#static_vnet_propagate_static_routes_enabled}.

---

##### `staticVnetRoute`<sup>Optional</sup> <a name="staticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetRoute"></a>

```typescript
public readonly staticVnetRoute: IResolvable | VirtualHubConnectionRoutingStaticVnetRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]

static_vnet_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#static_vnet_route VirtualHubConnection#static_vnet_route}

---

### VirtualHubConnectionRoutingPropagatedRouteTable <a name="VirtualHubConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

const virtualHubConnectionRoutingPropagatedRouteTable: virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#labels VirtualHubConnection#labels}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#route_table_ids VirtualHubConnection#route_table_ids}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#labels VirtualHubConnection#labels}.

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#route_table_ids VirtualHubConnection#route_table_ids}.

---

### VirtualHubConnectionRoutingStaticVnetRoute <a name="VirtualHubConnectionRoutingStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

const virtualHubConnectionRoutingStaticVnetRoute: virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#address_prefixes VirtualHubConnection#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}. |

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#address_prefixes VirtualHubConnection#address_prefixes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}.

---

##### `nextHopIpAddress`<sup>Optional</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.nextHopIpAddress"></a>

```typescript
public readonly nextHopIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}.

---

### VirtualHubConnectionTimeouts <a name="VirtualHubConnectionTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

const virtualHubConnectionTimeouts: virtualHubConnection.VirtualHubConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#create VirtualHubConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#delete VirtualHubConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#read VirtualHubConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#update VirtualHubConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#create VirtualHubConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#delete VirtualHubConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#read VirtualHubConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/virtual_hub_connection#update VirtualHubConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubConnectionRoutingOutputReference <a name="VirtualHubConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnectionRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable">putPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute">putStaticVnetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetAssociatedRouteTableId">resetAssociatedRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetInboundRouteMapId">resetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetOutboundRouteMapId">resetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetPropagatedRouteTable">resetPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetLocalRouteOverrideCriteria">resetStaticVnetLocalRouteOverrideCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetPropagateStaticRoutesEnabled">resetStaticVnetPropagateStaticRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetRoute">resetStaticVnetRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropagatedRouteTable` <a name="putPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```typescript
public putPropagatedRouteTable(value: VirtualHubConnectionRoutingPropagatedRouteTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---

##### `putStaticVnetRoute` <a name="putStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute"></a>

```typescript
public putStaticVnetRoute(value: IResolvable | VirtualHubConnectionRoutingStaticVnetRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]

---

##### `resetAssociatedRouteTableId` <a name="resetAssociatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetAssociatedRouteTableId"></a>

```typescript
public resetAssociatedRouteTableId(): void
```

##### `resetInboundRouteMapId` <a name="resetInboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```typescript
public resetInboundRouteMapId(): void
```

##### `resetOutboundRouteMapId` <a name="resetOutboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```typescript
public resetOutboundRouteMapId(): void
```

##### `resetPropagatedRouteTable` <a name="resetPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```typescript
public resetPropagatedRouteTable(): void
```

##### `resetStaticVnetLocalRouteOverrideCriteria` <a name="resetStaticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetLocalRouteOverrideCriteria"></a>

```typescript
public resetStaticVnetLocalRouteOverrideCriteria(): void
```

##### `resetStaticVnetPropagateStaticRoutesEnabled` <a name="resetStaticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetPropagateStaticRoutesEnabled"></a>

```typescript
public resetStaticVnetPropagateStaticRoutesEnabled(): void
```

##### `resetStaticVnetRoute` <a name="resetStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetRoute"></a>

```typescript
public resetStaticVnetRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference">VirtualHubConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRoute">staticVnetRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList">VirtualHubConnectionRoutingStaticVnetRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableIdInput">associatedRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapIdInput">inboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapIdInput">outboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTableInput">propagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteriaInput">staticVnetLocalRouteOverrideCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabledInput">staticVnetPropagateStaticRoutesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRouteInput">staticVnetRouteInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId">associatedRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria">staticVnetLocalRouteOverrideCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabled">staticVnetPropagateStaticRoutesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagatedRouteTable`<sup>Required</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: VirtualHubConnectionRoutingPropagatedRouteTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference">VirtualHubConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `staticVnetRoute`<sup>Required</sup> <a name="staticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRoute"></a>

```typescript
public readonly staticVnetRoute: VirtualHubConnectionRoutingStaticVnetRouteList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList">VirtualHubConnectionRoutingStaticVnetRouteList</a>

---

##### `associatedRouteTableIdInput`<sup>Optional</sup> <a name="associatedRouteTableIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableIdInput"></a>

```typescript
public readonly associatedRouteTableIdInput: string;
```

- *Type:* string

---

##### `inboundRouteMapIdInput`<sup>Optional</sup> <a name="inboundRouteMapIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```typescript
public readonly inboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `outboundRouteMapIdInput`<sup>Optional</sup> <a name="outboundRouteMapIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```typescript
public readonly outboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `propagatedRouteTableInput`<sup>Optional</sup> <a name="propagatedRouteTableInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```typescript
public readonly propagatedRouteTableInput: VirtualHubConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---

##### `staticVnetLocalRouteOverrideCriteriaInput`<sup>Optional</sup> <a name="staticVnetLocalRouteOverrideCriteriaInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteriaInput"></a>

```typescript
public readonly staticVnetLocalRouteOverrideCriteriaInput: string;
```

- *Type:* string

---

##### `staticVnetPropagateStaticRoutesEnabledInput`<sup>Optional</sup> <a name="staticVnetPropagateStaticRoutesEnabledInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabledInput"></a>

```typescript
public readonly staticVnetPropagateStaticRoutesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `staticVnetRouteInput`<sup>Optional</sup> <a name="staticVnetRouteInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRouteInput"></a>

```typescript
public readonly staticVnetRouteInput: IResolvable | VirtualHubConnectionRoutingStaticVnetRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]

---

##### `associatedRouteTableId`<sup>Required</sup> <a name="associatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId"></a>

```typescript
public readonly associatedRouteTableId: string;
```

- *Type:* string

---

##### `inboundRouteMapId`<sup>Required</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

---

##### `outboundRouteMapId`<sup>Required</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

---

##### `staticVnetLocalRouteOverrideCriteria`<sup>Required</sup> <a name="staticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria"></a>

```typescript
public readonly staticVnetLocalRouteOverrideCriteria: string;
```

- *Type:* string

---

##### `staticVnetPropagateStaticRoutesEnabled`<sup>Required</sup> <a name="staticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabled"></a>

```typescript
public readonly staticVnetPropagateStaticRoutesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualHubConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---


### VirtualHubConnectionRoutingPropagatedRouteTableOutputReference <a name="VirtualHubConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds">resetRouteTableIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRouteTableIds` <a name="resetRouteTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds"></a>

```typescript
public resetRouteTableIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```typescript
public readonly routeTableIdsInput: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualHubConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---


### VirtualHubConnectionRoutingStaticVnetRouteList <a name="VirtualHubConnectionRoutingStaticVnetRouteList" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get"></a>

```typescript
public get(index: number): VirtualHubConnectionRoutingStaticVnetRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubConnectionRoutingStaticVnetRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>[]

---


### VirtualHubConnectionRoutingStaticVnetRouteOutputReference <a name="VirtualHubConnectionRoutingStaticVnetRouteOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetNextHopIpAddress">resetNextHopIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetAddressPrefixes"></a>

```typescript
public resetAddressPrefixes(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNextHopIpAddress` <a name="resetNextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetNextHopIpAddress"></a>

```typescript
public resetNextHopIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddressInput">nextHopIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes">addressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixesInput"></a>

```typescript
public readonly addressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nextHopIpAddressInput`<sup>Optional</sup> <a name="nextHopIpAddressInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddressInput"></a>

```typescript
public readonly nextHopIpAddressInput: string;
```

- *Type:* string

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes"></a>

```typescript
public readonly addressPrefixes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress"></a>

```typescript
public readonly nextHopIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubConnectionRoutingStaticVnetRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute">VirtualHubConnectionRoutingStaticVnetRoute</a>

---


### VirtualHubConnectionTimeoutsOutputReference <a name="VirtualHubConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualHubConnection } from '@cdktf/provider-azurerm'

new virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

---



