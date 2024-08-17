# `springCloudApp` Submodule <a name="`springCloudApp` Submodule" id="@cdktf/provider-azurerm.springCloudApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApp <a name="SpringCloudApp" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app azurerm_spring_cloud_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudApp(scope: Construct, id: string, config: SpringCloudAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig">SpringCloudAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig">SpringCloudAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk">putCustomPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings">putIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk">putPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson">resetAddonJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk">resetCustomPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk">resetPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled">resetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPersistentDisk` <a name="putCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk"></a>

```typescript
public putCustomPersistentDisk(value: IResolvable | SpringCloudAppCustomPersistentDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putCustomPersistentDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity"></a>

```typescript
public putIdentity(value: SpringCloudAppIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---

##### `putIngressSettings` <a name="putIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings"></a>

```typescript
public putIngressSettings(value: SpringCloudAppIngressSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putIngressSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---

##### `putPersistentDisk` <a name="putPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk"></a>

```typescript
public putPersistentDisk(value: SpringCloudAppPersistentDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---

##### `resetAddonJson` <a name="resetAddonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetAddonJson"></a>

```typescript
public resetAddonJson(): void
```

##### `resetCustomPersistentDisk` <a name="resetCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetCustomPersistentDisk"></a>

```typescript
public resetCustomPersistentDisk(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIngressSettings"></a>

```typescript
public resetIngressSettings(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetPersistentDisk` <a name="resetPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPersistentDisk"></a>

```typescript
public resetPersistentDisk(): void
```

##### `resetPublicEndpointEnabled` <a name="resetPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetPublicEndpointEnabled"></a>

```typescript
public resetPublicEndpointEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

springCloudApp.SpringCloudApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

springCloudApp.SpringCloudApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

springCloudApp.SpringCloudApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

springCloudApp.SpringCloudApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk">customPersistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings">ingressSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk">persistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput">addonJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput">customPersistentDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput">persistentDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput">publicEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson">addonJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customPersistentDisk`<sup>Required</sup> <a name="customPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDisk"></a>

```typescript
public readonly customPersistentDisk: SpringCloudAppCustomPersistentDiskList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList">SpringCloudAppCustomPersistentDiskList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identity"></a>

```typescript
public readonly identity: SpringCloudAppIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference">SpringCloudAppIdentityOutputReference</a>

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: SpringCloudAppIngressSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference">SpringCloudAppIngressSettingsOutputReference</a>

---

##### `persistentDisk`<sup>Required</sup> <a name="persistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDisk"></a>

```typescript
public readonly persistentDisk: SpringCloudAppPersistentDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference">SpringCloudAppPersistentDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference">SpringCloudAppTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `addonJsonInput`<sup>Optional</sup> <a name="addonJsonInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJsonInput"></a>

```typescript
public readonly addonJsonInput: string;
```

- *Type:* string

---

##### `customPersistentDiskInput`<sup>Optional</sup> <a name="customPersistentDiskInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.customPersistentDiskInput"></a>

```typescript
public readonly customPersistentDiskInput: IResolvable | SpringCloudAppCustomPersistentDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.identityInput"></a>

```typescript
public readonly identityInput: SpringCloudAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.ingressSettingsInput"></a>

```typescript
public readonly ingressSettingsInput: SpringCloudAppIngressSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `persistentDiskInput`<sup>Optional</sup> <a name="persistentDiskInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.persistentDiskInput"></a>

```typescript
public readonly persistentDiskInput: SpringCloudAppPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---

##### `publicEndpointEnabledInput`<sup>Optional</sup> <a name="publicEndpointEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabledInput"></a>

```typescript
public readonly publicEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addonJson`<sup>Required</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.addonJson"></a>

```typescript
public readonly addonJson: string;
```

- *Type:* string

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicEndpointEnabled`<sup>Required</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.publicEndpointEnabled"></a>

```typescript
public readonly publicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppConfig <a name="SpringCloudAppConfig" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppConfig: springCloudApp.SpringCloudAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson">addonJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk">customPersistentDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]</code> | custom_persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings">ingressSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | ingress_settings block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk">persistentDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | persistent_disk block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled">publicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#name SpringCloudApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#resource_group_name SpringCloudApp#resource_group_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#service_name SpringCloudApp#service_name}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.addonJson"></a>

```typescript
public readonly addonJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#addon_json SpringCloudApp#addon_json}.

---

##### `customPersistentDisk`<sup>Optional</sup> <a name="customPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.customPersistentDisk"></a>

```typescript
public readonly customPersistentDisk: IResolvable | SpringCloudAppCustomPersistentDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]

custom_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#custom_persistent_disk SpringCloudApp#custom_persistent_disk}

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#https_only SpringCloudApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#id SpringCloudApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.identity"></a>

```typescript
public readonly identity: SpringCloudAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#identity SpringCloudApp#identity}

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: SpringCloudAppIngressSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

ingress_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#ingress_settings SpringCloudApp#ingress_settings}

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#is_public SpringCloudApp#is_public}.

---

##### `persistentDisk`<sup>Optional</sup> <a name="persistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.persistentDisk"></a>

```typescript
public readonly persistentDisk: SpringCloudAppPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#persistent_disk SpringCloudApp#persistent_disk}

---

##### `publicEndpointEnabled`<sup>Optional</sup> <a name="publicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.publicEndpointEnabled"></a>

```typescript
public readonly publicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#public_endpoint_enabled SpringCloudApp#public_endpoint_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#timeouts SpringCloudApp#timeouts}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppConfig.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#tls_enabled SpringCloudApp#tls_enabled}.

---

### SpringCloudAppCustomPersistentDisk <a name="SpringCloudAppCustomPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppCustomPersistentDisk: springCloudApp.SpringCloudAppCustomPersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName">shareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName">storageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled">readOnlyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#share_name SpringCloudApp#share_name}.

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#storage_name SpringCloudApp#storage_name}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_options SpringCloudApp#mount_options}.

---

##### `readOnlyEnabled`<sup>Optional</sup> <a name="readOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk.property.readOnlyEnabled"></a>

```typescript
public readonly readOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read_only_enabled SpringCloudApp#read_only_enabled}.

---

### SpringCloudAppIdentity <a name="SpringCloudAppIdentity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppIdentity: springCloudApp.SpringCloudAppIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#type SpringCloudApp#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#identity_ids SpringCloudApp#identity_ids}.

---

### SpringCloudAppIngressSettings <a name="SpringCloudAppIngressSettings" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppIngressSettings: springCloudApp.SpringCloudAppIngressSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol">backendProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds">readTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds">sendTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge">sessionCookieMaxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}. |

---

##### `backendProtocol`<sup>Optional</sup> <a name="backendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.backendProtocol"></a>

```typescript
public readonly backendProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#backend_protocol SpringCloudApp#backend_protocol}.

---

##### `readTimeoutInSeconds`<sup>Optional</sup> <a name="readTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.readTimeoutInSeconds"></a>

```typescript
public readonly readTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read_timeout_in_seconds SpringCloudApp#read_timeout_in_seconds}.

---

##### `sendTimeoutInSeconds`<sup>Optional</sup> <a name="sendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sendTimeoutInSeconds"></a>

```typescript
public readonly sendTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#send_timeout_in_seconds SpringCloudApp#send_timeout_in_seconds}.

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#session_affinity SpringCloudApp#session_affinity}.

---

##### `sessionCookieMaxAge`<sup>Optional</sup> <a name="sessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings.property.sessionCookieMaxAge"></a>

```typescript
public readonly sessionCookieMaxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#session_cookie_max_age SpringCloudApp#session_cookie_max_age}.

---

### SpringCloudAppPersistentDisk <a name="SpringCloudAppPersistentDisk" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppPersistentDisk: springCloudApp.SpringCloudAppPersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}. |

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#size_in_gb SpringCloudApp#size_in_gb}.

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#mount_path SpringCloudApp#mount_path}.

---

### SpringCloudAppTimeouts <a name="SpringCloudAppTimeouts" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

const springCloudAppTimeouts: springCloudApp.SpringCloudAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#create SpringCloudApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#delete SpringCloudApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#read SpringCloudApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/spring_cloud_app#update SpringCloudApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppCustomPersistentDiskList <a name="SpringCloudAppCustomPersistentDiskList" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppCustomPersistentDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get"></a>

```typescript
public get(index: number): SpringCloudAppCustomPersistentDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudAppCustomPersistentDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>[]

---


### SpringCloudAppCustomPersistentDiskOutputReference <a name="SpringCloudAppCustomPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled">resetReadOnlyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetReadOnlyEnabled` <a name="resetReadOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.resetReadOnlyEnabled"></a>

```typescript
public resetReadOnlyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput">readOnlyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput">storageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled">readOnlyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName">storageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `readOnlyEnabledInput`<sup>Optional</sup> <a name="readOnlyEnabledInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabledInput"></a>

```typescript
public readonly readOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storageNameInput`<sup>Optional</sup> <a name="storageNameInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageNameInput"></a>

```typescript
public readonly storageNameInput: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `readOnlyEnabled`<sup>Required</sup> <a name="readOnlyEnabled" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.readOnlyEnabled"></a>

```typescript
public readonly readOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storageName`<sup>Required</sup> <a name="storageName" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.storageName"></a>

```typescript
public readonly storageName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudAppCustomPersistentDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppCustomPersistentDisk">SpringCloudAppCustomPersistentDisk</a>

---


### SpringCloudAppIdentityOutputReference <a name="SpringCloudAppIdentityOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIdentity">SpringCloudAppIdentity</a>

---


### SpringCloudAppIngressSettingsOutputReference <a name="SpringCloudAppIngressSettingsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppIngressSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol">resetBackendProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds">resetReadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds">resetSendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge">resetSessionCookieMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendProtocol` <a name="resetBackendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetBackendProtocol"></a>

```typescript
public resetBackendProtocol(): void
```

##### `resetReadTimeoutInSeconds` <a name="resetReadTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetReadTimeoutInSeconds"></a>

```typescript
public resetReadTimeoutInSeconds(): void
```

##### `resetSendTimeoutInSeconds` <a name="resetSendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSendTimeoutInSeconds"></a>

```typescript
public resetSendTimeoutInSeconds(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSessionCookieMaxAge` <a name="resetSessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.resetSessionCookieMaxAge"></a>

```typescript
public resetSessionCookieMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput">backendProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput">readTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput">sendTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput">sessionCookieMaxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol">backendProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds">readTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds">sendTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge">sessionCookieMaxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendProtocolInput`<sup>Optional</sup> <a name="backendProtocolInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocolInput"></a>

```typescript
public readonly backendProtocolInput: string;
```

- *Type:* string

---

##### `readTimeoutInSecondsInput`<sup>Optional</sup> <a name="readTimeoutInSecondsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSecondsInput"></a>

```typescript
public readonly readTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `sendTimeoutInSecondsInput`<sup>Optional</sup> <a name="sendTimeoutInSecondsInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSecondsInput"></a>

```typescript
public readonly sendTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `sessionCookieMaxAgeInput`<sup>Optional</sup> <a name="sessionCookieMaxAgeInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAgeInput"></a>

```typescript
public readonly sessionCookieMaxAgeInput: number;
```

- *Type:* number

---

##### `backendProtocol`<sup>Required</sup> <a name="backendProtocol" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.backendProtocol"></a>

```typescript
public readonly backendProtocol: string;
```

- *Type:* string

---

##### `readTimeoutInSeconds`<sup>Required</sup> <a name="readTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.readTimeoutInSeconds"></a>

```typescript
public readonly readTimeoutInSeconds: number;
```

- *Type:* number

---

##### `sendTimeoutInSeconds`<sup>Required</sup> <a name="sendTimeoutInSeconds" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sendTimeoutInSeconds"></a>

```typescript
public readonly sendTimeoutInSeconds: number;
```

- *Type:* number

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `sessionCookieMaxAge`<sup>Required</sup> <a name="sessionCookieMaxAge" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.sessionCookieMaxAge"></a>

```typescript
public readonly sessionCookieMaxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudAppIngressSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppIngressSettings">SpringCloudAppIngressSettings</a>

---


### SpringCloudAppPersistentDiskOutputReference <a name="SpringCloudAppPersistentDiskOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppPersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGbInput"></a>

```typescript
public readonly sizeInGbInput: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.sizeInGb"></a>

```typescript
public readonly sizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudAppPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppPersistentDisk">SpringCloudAppPersistentDisk</a>

---


### SpringCloudAppTimeoutsOutputReference <a name="SpringCloudAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudApp } from '@cdktf/provider-azurerm'

new springCloudApp.SpringCloudAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApp.SpringCloudAppTimeouts">SpringCloudAppTimeouts</a>

---



