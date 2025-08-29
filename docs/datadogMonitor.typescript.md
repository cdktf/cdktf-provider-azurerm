# `datadogMonitor` Submodule <a name="`datadogMonitor` Submodule" id="@cdktf/provider-azurerm.datadogMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitor <a name="DatadogMonitor" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor azurerm_datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

new datadogMonitor.DatadogMonitor(scope: Construct, id: string, config: DatadogMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig">DatadogMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig">DatadogMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization">putDatadogOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetMonitoringEnabled">resetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatadogOrganization` <a name="putDatadogOrganization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization"></a>

```typescript
public putDatadogOrganization(value: DatadogMonitorDatadogOrganization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity"></a>

```typescript
public putIdentity(value: DatadogMonitorIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: DatadogMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser"></a>

```typescript
public putUser(value: DatadogMonitorUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMonitoringEnabled` <a name="resetMonitoringEnabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetMonitoringEnabled"></a>

```typescript
public resetMonitoringEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatadogMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

datadogMonitor.DatadogMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

datadogMonitor.DatadogMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

datadogMonitor.DatadogMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

datadogMonitor.DatadogMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatadogMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatadogMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatadogMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganization">datadogOrganization</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference">DatadogMonitorDatadogOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference">DatadogMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.marketplaceSubscriptionStatus">marketplaceSubscriptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference">DatadogMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference">DatadogMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganizationInput">datadogOrganizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabledInput">monitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datadogOrganization`<sup>Required</sup> <a name="datadogOrganization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganization"></a>

```typescript
public readonly datadogOrganization: DatadogMonitorDatadogOrganizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference">DatadogMonitorDatadogOrganizationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identity"></a>

```typescript
public readonly identity: DatadogMonitorIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference">DatadogMonitorIdentityOutputReference</a>

---

##### `marketplaceSubscriptionStatus`<sup>Required</sup> <a name="marketplaceSubscriptionStatus" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.marketplaceSubscriptionStatus"></a>

```typescript
public readonly marketplaceSubscriptionStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: DatadogMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference">DatadogMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.user"></a>

```typescript
public readonly user: DatadogMonitorUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference">DatadogMonitorUserOutputReference</a>

---

##### `datadogOrganizationInput`<sup>Optional</sup> <a name="datadogOrganizationInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganizationInput"></a>

```typescript
public readonly datadogOrganizationInput: DatadogMonitorDatadogOrganization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identityInput"></a>

```typescript
public readonly identityInput: DatadogMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `monitoringEnabledInput`<sup>Optional</sup> <a name="monitoringEnabledInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabledInput"></a>

```typescript
public readonly monitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatadogMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.userInput"></a>

```typescript
public readonly userInput: DatadogMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `monitoringEnabled`<sup>Required</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorConfig <a name="DatadogMonitorConfig" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

const datadogMonitorConfig: datadogMonitor.DatadogMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.datadogOrganization">datadogOrganization</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | datadog_organization block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#location DatadogMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#name DatadogMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#id DatadogMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.monitoringEnabled">monitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datadogOrganization`<sup>Required</sup> <a name="datadogOrganization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.datadogOrganization"></a>

```typescript
public readonly datadogOrganization: DatadogMonitorDatadogOrganization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

datadog_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#datadog_organization DatadogMonitor#datadog_organization}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#location DatadogMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.user"></a>

```typescript
public readonly user: DatadogMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#user DatadogMonitor#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#id DatadogMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.identity"></a>

```typescript
public readonly identity: DatadogMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#identity DatadogMonitor#identity}

---

##### `monitoringEnabled`<sup>Optional</sup> <a name="monitoringEnabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.monitoringEnabled"></a>

```typescript
public readonly monitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatadogMonitorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#timeouts DatadogMonitor#timeouts}

---

### DatadogMonitorDatadogOrganization <a name="DatadogMonitorDatadogOrganization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

const datadogMonitorDatadogOrganization: datadogMonitor.DatadogMonitorDatadogOrganization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.apiKey">apiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#api_key DatadogMonitor#api_key}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.applicationKey">applicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#application_key DatadogMonitor#application_key}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.enterpriseAppId">enterpriseAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#enterprise_app_id DatadogMonitor#enterprise_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingAuthCode">linkingAuthCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#linking_auth_code DatadogMonitor#linking_auth_code}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingClientId">linkingClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#linking_client_id DatadogMonitor#linking_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.redirectUri">redirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#redirect_uri DatadogMonitor#redirect_uri}. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#api_key DatadogMonitor#api_key}.

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#application_key DatadogMonitor#application_key}.

---

##### `enterpriseAppId`<sup>Optional</sup> <a name="enterpriseAppId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.enterpriseAppId"></a>

```typescript
public readonly enterpriseAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#enterprise_app_id DatadogMonitor#enterprise_app_id}.

---

##### `linkingAuthCode`<sup>Optional</sup> <a name="linkingAuthCode" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingAuthCode"></a>

```typescript
public readonly linkingAuthCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#linking_auth_code DatadogMonitor#linking_auth_code}.

---

##### `linkingClientId`<sup>Optional</sup> <a name="linkingClientId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingClientId"></a>

```typescript
public readonly linkingClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#linking_client_id DatadogMonitor#linking_client_id}.

---

##### `redirectUri`<sup>Optional</sup> <a name="redirectUri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#redirect_uri DatadogMonitor#redirect_uri}.

---

### DatadogMonitorIdentity <a name="DatadogMonitorIdentity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

const datadogMonitorIdentity: datadogMonitor.DatadogMonitorIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#type DatadogMonitor#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#type DatadogMonitor#type}.

---

### DatadogMonitorTimeouts <a name="DatadogMonitorTimeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

const datadogMonitorTimeouts: datadogMonitor.DatadogMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#create DatadogMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#delete DatadogMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#read DatadogMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#update DatadogMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#create DatadogMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#delete DatadogMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#read DatadogMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#update DatadogMonitor#update}.

---

### DatadogMonitorUser <a name="DatadogMonitorUser" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

const datadogMonitorUser: datadogMonitor.DatadogMonitorUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#email DatadogMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#name DatadogMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#phone_number DatadogMonitor#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#email DatadogMonitor#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/datadog_monitor#phone_number DatadogMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorDatadogOrganizationOutputReference <a name="DatadogMonitorDatadogOrganizationOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

new datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetEnterpriseAppId">resetEnterpriseAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingAuthCode">resetLinkingAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingClientId">resetLinkingClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetRedirectUri">resetRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnterpriseAppId` <a name="resetEnterpriseAppId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetEnterpriseAppId"></a>

```typescript
public resetEnterpriseAppId(): void
```

##### `resetLinkingAuthCode` <a name="resetLinkingAuthCode" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingAuthCode"></a>

```typescript
public resetLinkingAuthCode(): void
```

##### `resetLinkingClientId` <a name="resetLinkingClientId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingClientId"></a>

```typescript
public resetLinkingClientId(): void
```

##### `resetRedirectUri` <a name="resetRedirectUri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetRedirectUri"></a>

```typescript
public resetRedirectUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKeyInput">applicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppIdInput">enterpriseAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCodeInput">linkingAuthCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientIdInput">linkingClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppId">enterpriseAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCode">linkingAuthCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientId">linkingClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKeyInput"></a>

```typescript
public readonly applicationKeyInput: string;
```

- *Type:* string

---

##### `enterpriseAppIdInput`<sup>Optional</sup> <a name="enterpriseAppIdInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppIdInput"></a>

```typescript
public readonly enterpriseAppIdInput: string;
```

- *Type:* string

---

##### `linkingAuthCodeInput`<sup>Optional</sup> <a name="linkingAuthCodeInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCodeInput"></a>

```typescript
public readonly linkingAuthCodeInput: string;
```

- *Type:* string

---

##### `linkingClientIdInput`<sup>Optional</sup> <a name="linkingClientIdInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientIdInput"></a>

```typescript
public readonly linkingClientIdInput: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `enterpriseAppId`<sup>Required</sup> <a name="enterpriseAppId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppId"></a>

```typescript
public readonly enterpriseAppId: string;
```

- *Type:* string

---

##### `linkingAuthCode`<sup>Required</sup> <a name="linkingAuthCode" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCode"></a>

```typescript
public readonly linkingAuthCode: string;
```

- *Type:* string

---

##### `linkingClientId`<sup>Required</sup> <a name="linkingClientId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientId"></a>

```typescript
public readonly linkingClientId: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatadogMonitorDatadogOrganization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

---


### DatadogMonitorIdentityOutputReference <a name="DatadogMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

new datadogMonitor.DatadogMonitorIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatadogMonitorIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

---


### DatadogMonitorTimeoutsOutputReference <a name="DatadogMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

new datadogMonitor.DatadogMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatadogMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

---


### DatadogMonitorUserOutputReference <a name="DatadogMonitorUserOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer"></a>

```typescript
import { datadogMonitor } from '@cdktf/provider-azurerm'

new datadogMonitor.DatadogMonitorUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatadogMonitorUser;
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

---



